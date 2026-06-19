# Sol-ish | Pride and Peace - V3.1 - 19 June 2026

A bespoke, lightweight web project celebrating the refined "Sol-ish" identity. It serves as a digital postcode for settled hearts, representing pride and peace in the Solihull area.

This project is built using pure HTML5, CSS3, and Vanilla JavaScript for optimal performance, ensuring fast load times without the bloat of heavy external frameworks.

## | Key Features

* **Dual-Modal Architecture**: Features separate, independent modal overlays: one for the interactive community messaging form and one for cultural context.
* **Web3Forms Integration**: Securely routes messages to specific recipients ("Man", "Judy", "Gabriel") using individualized API keys injected dynamically upon selection.
* **Responsive Layout**: Uses CSS Flexbox for seamless adaptation across mobile, tablet, and desktop displays.
* **Dynamic Rendering**: Automatically populates the dictionary grid from a central configuration array in `content.js`, simplifying content updates.
* **Framework-Free**: Zero dependencies, relying on native ES6 JavaScript and CSS variables for maintainability.
* **Modal(About)**: Add an image, updating .modal-img in CSS

## | File Structure

* `index.html`: The structural foundation, housing the two modal containers, form fields, and hero section.
* `style.css`: Manages custom CSS variables, modal visibility via the `.active` class, and all responsive layout logic.
* `content.js`: The runtime engine managing dictionary rendering, the two-modal toggle logic, and dynamic Web3Forms key injection.

## ⚙️ Configuration & Setup

### 1. Updating Content
* **Dictionary**: Modify the `DICTIONARY_DEFINITIONS` array in `content.js` to add or update character cards.
* **About Content**: Static text for the "Refined British Culture" modal is managed directly in `index.html` within the `aboutModal` container.

### 2. Web3Forms Integration
To route messages correctly, you must update the `data-key` attributes in `index.html`:
* Locate the submission buttons inside the `solishForm` in `index.html`.
* Replace `YOUR_KEY_FOR_MAN`, `YOUR_KEY_FOR_JUDY`, and `YOUR_KEY_FOR_GABRIEL` with your actual Web3Forms API keys.

### 3. Deployment
Simply open `index.html` in any modern browser to preview changes. The site is compatible with all modern browsers (Chrome, Firefox, Edge, Safari) due to its use of native web standards.
