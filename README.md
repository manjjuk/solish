# Sol-ish | Pride and Peace
A refined, heritage-inspired single-page website dedicated to the unique cultural identity of Solihull. This project serves as a "digital dictionary" for the term *Sol-ish*, capturing the essence of the borough through elegant typography and a clean, British aesthetic.

## 🌟 Key Features
* **Heritage Branding:** Features a custom "Heritage Espresso Shadow" text effect for a classic, high-end feel.
* **Dictionary Layout:** A responsive 3-column grid explaining "Sol-ish" as an adjective, noun, and verb.
* **Interactive Modal:** A "Contact me in a Sol-ish way" button that triggers a modern Bootstrap modal with a QR code.
* **Responsive Design:** Fully optimised for mobile devices using Bootstrap 5 and custom Media Queries.

## 🛠️ Built With
* **HTML5:** Structured with semantic tags for accessibility.
* **CSS3 (Custom Properties):** Utilising CSS variables (`:root`) for easy global styling.
* **Bootstrap 5:** Used for the grid system, spacing, and modal components.
* **Google Fonts / Web Safe Fonts:** Styled with 'Georgia' for a traditional serif feel.

## 🎨 Customisation Guide
This project uses **CSS Variables** located at the top of the `index.html` file within the `<style>` tag. This makes it very easy to change the look of the entire site in one place.

### 1. Changing the Fonts
Look for the `--main-font-family` variable. 
* **To change:** Swap `'Georgia', serif` for another font like `'Arial', sans-serif` or a Google Font link.

### 2. Adjusting Text Sizes
You can scale the typography by changing these variables:
* `--base-font-size`: Controls the standard paragraph text (currently `20px`).
* `--title-font-size`: Controls the large "Sol-ish" header (currently `6rem`).

### 3. Updating Colours
To change the colour scheme, update the Hex codes in the `:root` section:
* **Background:** Change `--bg-color` (currently a cream `#fdfcf0`).
* **Accents:** Change `--accent-color` to move away from the "St. Alphege Green" (currently `#7a8d7a`).

### 4. The Heritage Shadow Effect
The 3D effect on the main header is created by stacking multiple shadows. To adjust the thickness or depth, look for the `.heritage-shadow` class:
* **To make it deeper:** Add more lines to the `text-shadow` property (e.g., adding `6px 6px 0px var(--espresso-dark)`).
* **To change the shadow colour:** Update the `--espresso-dark` variable (currently `#3c2f2f`).

### 5. Updating the Contact Email & QR Code
The "Contact" pop-up uses a QR code generated via an API. To update where this code sends people:
* **The Email Address:** Locate the `<img>` tag inside the `modal-body`. Look for the `data=mailto:` section in the URL. 
* **To Update:** Simply replace `seeyou@touchwood.coffee-shop` with your preferred email address. The QR code will automatically update to link to your new address.

## 🚀 How to View Locally
1. **Download** the `index.html` file and the `images` folder.
2. **Ensure** your `images` folder contains your header photo (e.g., `solishheader.jpg`).
3. **Open** `index.html` in any modern web browser to view the site.

---
*Refined British Culture | Created for the settled hearts of Solihull.*
