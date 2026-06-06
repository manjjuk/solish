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
        example: '"I stroll through Shirley Park and hear the quiet elegance of Solish: a soft, measured way of speaking that prioritizes grace over haste."'
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
            <div class="dictionary-card-wrapper">
                <div class="dictionary-card">
                    <h3 class="card-title">${def.title}</h3>
                    <p>${def.text}</p>
                    <span class="example-text">${def.example}</span>
                </div>
            </div>
        `).join('');
    }

    // Automatically construct family-specific trigger buttons
    const familyButtonsRow = document.getElementById('familyButtonsRow');
    if (familyButtonsRow) {
        familyButtonsRow.innerHTML = FAMILY_MEMBERS.map(member => `
            <div class="family-button-wrapper">
                <button type="submit" data-recipient="${member.id}" class="btn btn-outline-dark family-submit-btn">
                    ${member.name}
                </button>
            </div>
        `).join('');
    }

    // --- MODAL TOGGLE LOGIC (Replacing Bootstrap) ---
    const modal = document.getElementById('qrModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');

    if (openBtn && modal) {
        openBtn.addEventListener('click', () => modal.classList.add('active'));
    }
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
    // Close modal if user clicks outside the modal box
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- SUBMISSION CAPTURE & ASYNCHRONOUS NETWORK HANDLER ---
    let clickedRecipient = "";

    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('family-submit-btn')) {
            clickedRecipient = e.target.getAttribute('data-recipient');
        }
    });

    const form = document.getElementById('solishForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); 
            
            if (!clickedRecipient) {
                alert('Please select a family member button to send your message.');
                return;
            }

            const familyButtons = document.querySelectorAll('.family-submit-btn');
            familyButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.getAttribute('data-recipient') === clickedRecipient) {
                    btn.dataset.originalText = btn.innerText;
                    btn.innerText = "SENDING...";
                }
            });

            // FIXED: Removed the references to the commented-out name and email fields
            const formData = {
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
                    form.reset(); 
                    modal.classList.remove('active'); // Close our custom modal
                } else {
                    alert('A bit of a hitch there. Please try again.');
                }
            } catch (error) {
                console.error('Network Error:', error);
                alert('Could not connect to the server. Please try again later.');
            } finally {
                familyButtons.forEach(btn => {
                    btn.disabled = false;
                    if (btn.dataset.originalText) btn.innerText = btn.dataset.originalText;
                });
                clickedRecipient = ""; 
            }
        });
    }
});
