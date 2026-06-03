# Sol-ish | Pride and Peace V6.0 - 02 May 2026

A refined, heritage-inspired single-page website dedicated to the unique cultural identity of Solihull. This project serves as a dynamic "digital dictionary" for the term *Sol-ish*, capturing the essence of the borough through elegant typography, clean British design, and an interactive family contact portal.

## 🌟 Key Features
* **Heritage Branding:** Features a custom "Heritage Espresso Shadow" 3D text effect for a classic, high-end British feel.
* **Dynamic Dictionary Layout:** A responsive 3-column grid driven entirely by JavaScript, explaining "Sol-ish" as an adjective, noun, and verb.
* **Intelligent Family Email Portal:** A contact form inside a Bootstrap modal featuring 3 distinct submission buttons. It automatically routes messages to different family members via Cloudflare back-end microservices.
* **Modern Async Form Handling:** Submits data in the background using JavaScript `fetch()`, giving live visual feedback ("SENDING...") and smoothly closing the modal without reloading the page.
* **Responsive Architecture:** Fully optimised for mobile devices using the latest Bootstrap framework distribution and custom Media Queries.

## 🛠️ Built With
* **HTML5:** Modular markup structured with unique target hooks for dynamic content insertion.
* **CSS3 (Custom Properties):** Clean separation of styles into an external sheet utilizing CSS variables (`:root`) for instant theme management.
* **Bootstrap 5.3.8:** Powered by the latest production version of Bootstrap for cutting-edge component layout and stability.
* **JavaScript (ES6+):** Pure vanilla JS handling dynamic interface creation and secure API payload transmissions.
* **Cloudflare Workers & Email Routing:** A lightweight serverless backend handling validation, security headers, and direct inbox deliveries.

---

## 📂 Project Architecture
The project is split into three clean files for ease of maintenance:

1. **`index.html`** - The skeletal structure. Contains layout blocks, the pop-up modal configuration, and references external scripts. You rarely need to touch this.
2. **`style.css`** - The presentation layer. Houses layout rules, variables, responsiveness overrides, and typography definitions.
3. **`content.js`** - **Your Control Panel.** Houses all user-facing dictionary definitions, family member details, and form transmission code.

---

## 🎨 Layout & Design Management (`style.css`)
Global visual styles are governed by CSS Variables located at the top of the `style.css` file. 

* **Typography Customisation:** Swap out the font style or load new typefaces by modifying the `--main-font-family` property (currently `'Georgia', serif`).
* **Scale Adjustment:** Adjust the relative sizes of text globally across screen spaces by altering `--base-font-size` and `--title-font-size`.
* **Colour Themes:** Transform the atmosphere instantly by replacing HEX codes in the root variables:
  * `--bg-color`: The primary foundation background shade (currently warm cream `#fdfcf0`).
  * `--accent-color`: The corporate branding highlight color (currently "St. Alphege Green" `#7a8d7a`).
  * `--espresso-dark`: The deep shadow core backing the headers (currently `#3c2f2f`).

---

## 🚀 Post-Launch Updates Guide (`content.js`)
When your website is live on the internet, **`content.js` is the only file you need to edit** to keep things up to date.

### 1. Updating Dictionary Terms
To add a new definition or change existing text, edit the `DICTIONARY_DEFINITIONS` array block. The system will automatically compute and layout the elements across your grid using a `.map()` loop.

### 2. Managing Family Members & Buttons
To add or remove an email submission button, simply update the entries in the `FAMILY_MEMBERS` array:
```javascript
const FAMILY_MEMBERS = [
    { id: "man", name: "Man" },
    { id: "judy", name: "Judy" },
    { id: "gabriel", name: "Gabriel" }
];
