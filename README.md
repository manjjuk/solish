# Solish | Pride and Peace - V2.0 - 06 June 2026

A bespoke, lightweight web project celebrating the refined "Sol-ish" identity—a local culture and dialect distinct from Brummie or Warwickshire. It serves as a digital postcode for settled hearts, representing pride and peace.

This project has been carefully crafted using pure HTML, CSS, and Vanilla JavaScript, ensuring an exceptionally fast load time and zero reliance on heavy external frameworks like Bootstrap.

## | Key Features

* **Framework-Free Responsive Design:** Fully rebuilt using modern CSS Flexbox, ensuring perfect alignment and responsiveness across mobile devices, tablets, and desktop displays.
* **Bespoke Aesthetics:** Features a classic design language, utilising a 'Georgia' serif font, a distinct 'St. Alphege green' accent colour, and smooth, pill-shaped buttons for a modern yet heritage feel.
* **Dynamic Content Injection:** The JavaScript runtime engine automatically populates the dictionary grid and the contact form buttons from central data arrays, making future updates incredibly straightforward.
* **Custom Modal System:** A lightweight, pure CSS and JavaScript modal handles the contact form overlay, providing a seamless user experience without page reloads.
* **Serverless Integration:** The contact form is designed to connect asynchronously to a Cloudflare Worker, allowing for secure and efficient message handling.

## | File Structure

The project is cleanly divided into three core files:

* `index.html`: The main structural document, featuring semantic HTML5 tags and the foundation for the bespoke modal interface.
* `style.css`: The global style controls. It manages all custom properties (CSS variables), Flexbox layouts, typography, and responsive media queries. 
* `content.js`: The runtime core engine. It handles the dynamic rendering of the dictionary definitions, manages the modal's open/close behaviour, and processes the asynchronous network requests for the form submission.

## ⚙️ Configuration & Setup

### 1. Local Development
To view and work on the site locally, simply open the `index.html` file in any modern web browser. No complex build tools or local servers are strictly required for the front-end interface.

### 2. Updating Content
If you need to add new Solish phrases or update family members, simply open `content.js` and modify the configuration arrays at the top of the file:
* **`DICTIONARY_DEFINITIONS`**: Add or edit the title, text, and example fields to update the main page grid.
* **`FAMILY_MEMBERS`**: Update the IDs and names to change who the contact form can be sent to.

### 3. Connecting the Cloudflare Worker
Before pushing the site live, you must update the API endpoint in `content.js` to ensure the contact form successfully delivers messages. 
* Locate the following line in `content.js`:
  `const WORKER_URL = 'https://solish-form-handler.your-subdomain.workers.dev';`
* Replace the placeholder string with ta live Cloudflare Worker URL.

## 🛠️ Browser Support
This project uses native CSS Flexbox and ES6 JavaScript. It is fully supported by all modern browsers, including Safari, Chrome, Edge, and Firefox.
