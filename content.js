// =========================================================================
// 1. CONFIGURATION AREA: UPDATE WORDS, NAMES, & ENDPOINTS SAFELY HERE
// =========================================================================

const DICTIONARY_DEFINITIONS = [
    {
        title: "1. adjective",
        text: "Used by those who feel a distinct cultural separation from 'Brummie' or 'Warwickshire' identities.",
        example: '"I\'ve lived in Shirley for twenty years; I\'ve become entirely Solish."'
    },
    {
        title: "2. proper noun",
        text: "The local dialect. A refined version of English that swaps slang for understated politeness and local knowledge.",
        example: '"You could tell he spoke Solish by the way he pronounced \'St. Alphege\' with such reverence."'
    },
    {
        title: "3. verb [intransitive]",
        text: "To be in a state of total harmony with the borough\'s rhythm—feeling settled, calm, and perfectly placed.",
        example: '"After a coffee in Touchwood and a walk in the park, I\'m finally feeling Solish."'
    }
];

const FAMILY_MEMBERS = [
    { id: "man", name: "Man" },
    { id: "judy", name: "Judy" },
    { id: "gabriel", name: "Gabriel" }
];

// !!! REPLACE THIS STRING WITH YOUR LIVE CLOUDFLARE WORKER ENDPOINT !!!
const WORKER_URL = 'https://solish-form-handler.your-subdomain.workers.dev';


// =========================================================================
// 2. RUNTIME CORE ENGINE: GENERATES INTERFACE AND DISPATCHES DATA TO API
// =========================================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Automatically render definitions onto the home page grid layout
    const definitionGrid = document.getElementById('definitionGrid');
    if (definitionGrid) {
        definitionGrid.innerHTML = DICTIONARY_DEFINITIONS.map(def => `
            <div class="col-md-4">
                <div class="dictionary-card">
                    <h3 class="card-title">${def.title}</h3>
                    <p>${def.text}</p>
                    <span class="example-text">${def.example}</span>
                </div>
            </div>
        `).join('');
    }

    // Automatically construct family-specific trigger buttons inside modal form footer
    const familyButtonsRow = document.getElementById('familyButtonsRow');
    if (familyButtonsRow) {
        familyButtonsRow.innerHTML = FAMILY_MEMBERS.map(member => `
            <div class="col">
                <div class="modal-footer border-0 p-0">
                    <button type="submit" data-recipient="${member.id}" class="btn btn-outline-dark w-100 family-submit-btn">
                        ${member.name}
                    </button>
                </div>
            </div>
        `).join('');
    }

    // --- SUBMISSION CAPTURE & ASYNCHRONOUS NETWORK HANDLER ---
    let clickedRecipient = "";

    // Global listener to instantly register which specific member target was selected
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('family-submit-btn')) {
            clickedRecipient = e.target.getAttribute('data-recipient');
        }
    });

    const form = document.getElementById('solishForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Intercept browser redirection path natively
            
            if (!clickedRecipient) {
                alert('Please select a family member button to send your message.');
                return;
            }

            // Lock input actions and change label state to indicate network processing
            const familyButtons = document.querySelectorAll('.family-submit-btn');
            familyButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.getAttribute('data-recipient') === clickedRecipient) {
                    btn.dataset.originalText = btn.innerText;
                    btn.innerText = "SENDING...";
                }
            });

            // Gather values directly from standard IDs
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                toWho: clickedRecipient
            };

            try {
                const response = await fetch(WORKER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert('Message sent successfully! Cheers.');
                    form.reset(); // Erase values for future submissions
                    
                    // Call the standard Bootstrap 5.3 interface method to toggle visibility off
                    const modalElement = document.getElementById('qrModal');
                    const modal = bootstrap.Modal.getInstance(modalElement);
                    if (modal) modal.hide();
                } else {
                    alert('A bit of a hitch there. Please try again.');
                }
            } catch (error) {
                console.error('Network Error:', error);
                alert('Could not connect to the server. Please try again later.');
            } finally {
                // Return interface styling blocks back to interactive layout state
                familyButtons.forEach(btn => {
                    btn.disabled = false;
                    if (btn.dataset.originalText) btn.innerText = btn.dataset.originalText;
                });
                clickedRecipient = ""; // Drop specific target state value safely
            }
        });
    }
});
