document.addEventListener('DOMContentLoaded', function() {
    // 1. DATA CONFIGURATION
    const DICTIONARY_DEFINITIONS = [
        { title: "The Father", 
        	text: "The village pragmatist who believes the height of the grass is a direct reflection of one's moral standing.", 
        	example: '"If your hedge isn’t trimmed by Sunday, you’re practically insulting the entire Solish moral code."', 
        	image: "images/fa.png" },
        { title: "The Holy Mother", 
        	text: "The village diplomat, capable of ending any local dispute with a perfectly timed offer of tea.", 
        	example: '"It’s hard to stay cross when you’re properly caffeinated, the classic Solish peace treaty."', 
        	image: "images/ma.png" },
        { title: "The Son", 
        	text: "The relaxed inhabitant who has successfully mastered the art of doing nothing.", 
        	example: '"Why rush? The best way to spend a day is at a pace that lets you actually notice the place you live. That’s the real Solish dream."', 
        	image: "images/boy.png" }
    ];

    // RENDER DEFINITIONS
    const definitionGrid = document.getElementById('definitionGrid');
    if (definitionGrid) {
        definitionGrid.innerHTML = DICTIONARY_DEFINITIONS.map(def => `
            <div class="dictionary-card-wrapper">
                <div class="dictionary-card">
                    <img src="${def.image}" alt="Character" class="card-image card-image-clickable">
                    <h3 class="card-title">${def.title}</h3>
                    <p>${def.text}</p>
                    <span class="example-text">${def.example}</span>
                </div>
            </div>
        `).join('');
    }

    // 2. MODAL & FORM LOGIC
    const formModal = document.getElementById('formModal');
    const aboutModal = document.getElementById('aboutModal');
    const accessKeyInput = document.getElementById('web3AccessKey');
    const solishForm = document.getElementById('solishForm');

    // Open/Close Modals
    document.getElementById('openAboutModal')?.addEventListener('click', (e) => { e.preventDefault(); aboutModal.classList.add('active'); });
    document.getElementById('openModalBtn')?.addEventListener('click', () => formModal.classList.add('active'));
    document.getElementById('closeFormBtn')?.addEventListener('click', () => formModal.classList.remove('active'));
    document.getElementById('closeAboutBtn')?.addEventListener('click', () => aboutModal.classList.remove('active'));

    // Character image click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-image-clickable')) formModal.classList.add('active');
        
        // Handle Submit Button Key Injection
        if (e.target.classList.contains('submit-btn')) {
            const selectedKey = e.target.getAttribute('data-key');
            accessKeyInput.value = selectedKey; 
        }
        
        // Close on background click
        if (e.target === formModal) formModal.classList.remove('active');
        if (e.target === aboutModal) aboutModal.classList.remove('active');
    });

    // Handle Form Reset after Submission
    if (solishForm) {
        solishForm.addEventListener('submit', () => {
            setTimeout(() => {
                formModal.classList.remove('active');
                solishForm.reset();
            }, 1000);
        });
    }
});
