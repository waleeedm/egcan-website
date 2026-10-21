# EGCAN Holding website — responsive prototype v7

## Included files
- `index.html` — home page and all four divisions
- `clad-door.html` — Clad Door division
- `custom-furniture.html` — Custom Furniture / EG Bespoke
- `can-accessories.html` — Can Accessories
- `egfit.html` — EGFIT division
- `shop.html` — category filters and product catalogue
- `product.html` — reusable product detail page with selectable image gallery
- `styles.css` — responsive styles for mobile, tablet and desktop
- `script.js` — navigation, product cards, product gallery, and demo bag
- `README.md` — deployment notes

## Upload to GitHub Pages
1. Extract the ZIP.
2. Upload all files to the repository root (same folder as the existing `index.html`).
3. Commit to the `main` branch.
4. Wait for GitHub Pages to deploy and test on an iPhone/Android device.

## Before commercial launch
- The wordmark is text-based because the approved `egcan-logo-middle.png` source asset was not available in the working files for this package. Replace the text wordmark with the approved asset when available; do not substitute a different logo design.
- Product photography is illustrative Unsplash imagery, not confirmed EGCAN inventory or completed projects. Replace with the user's approved photos.
- Change `hello@egcan.example` in the HTML and `script.js` to the real contact email.
- Prices and specifications are deliberately “Price on request” / confirmation-based placeholders.
- The bag is a front-end demonstration using browser local storage and email enquiry. There is no payment gateway, server-side stock, customer account, or order database.
- EGFIT means **Egyptian General Finishing and Interior Technology** and is positioned around storefronts, complete store fit-outs from scratch, and interior/exterior finishing.
- Google Fonts and Unsplash images load from the internet; self-host them if offline/strict privacy requirements apply.

## Product data
Edit the `products` array near the top of `script.js`. Each item supports:
`id`, `name`, `category`, `price`, `tag`, `description`, `images` (array), and `specs` (object).
Supported shop categories: `Clad Door`, `Custom Furniture`, `Can Accessories`.
EGFIT is a project-service division, not a retail product category in the sample catalogue.
