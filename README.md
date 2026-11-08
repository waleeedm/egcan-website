# EGCAN Holding — website refresh package

This package updates the supplied EGCAN GitHub Pages website while preserving its existing page structure, filenames, navigation and deep-green / warm-neutral visual identity.

## Included
- Home page and four divisions
- Expanded Clad Door and Custom Furniture galleries
- Can Accessories visual collection gallery
- EGFIT four-stage shell-to-handover story
- 15 sample product concepts: five per existing retail category
- Secondary product image on hover, product details and gallery
- In-page enquiry modal
- Responsive styling for desktop and mobile
- Front-end shopping bag demonstration

## Publish on GitHub Pages
1. Download and extract this ZIP.
2. Open https://github.com/waleeedm/egcan-website
3. Choose **Add file → Upload files**.
4. Upload all ten files into the repository root (same folder as `index.html`).
5. Commit the changes to `main`.
6. Wait for GitHub Pages to deploy, then test desktop and mobile.

## Important before launch
- Product names and imagery are illustrative concepts, not a verified EGCAN inventory list. Replace with approved SKUs, actual names, prices and specifications before accepting orders.
- Unsplash images are visual references, not confirmed completed EGCAN projects. Replace with approved company photography for a true project portfolio.
- The EGFIT sequence is an illustrative process (empty shell, planning, fit-out, handover), not a documentary record of one named project.
- The approved EGCAN logo asset was not included in the uploaded files. The current text wordmark is preserved; no substitute logo has been invented.
- `hello@egcan.example` remains a placeholder. Replace it in `script.js` and any remaining page copy with the real company enquiry email.
- The enquiry form opens inside the website. On submit it hands the completed message to the visitor's configured email app. A direct company inbox submission requires a configured form service or backend.
- The shopping bag is a front-end enquiry demonstration, not live checkout. No payment gateway, order database, stock management, shipping calculation or customer accounts are connected.
- Prices remain “Price on request” because no approved prices were supplied.
- Google Fonts and Unsplash photographs require an internet connection.

## Product catalogue
Edit the `products` array near the top of `script.js`. Each product supports `id`, `name`, `category`, `price`, `tag`, `description`, `images` (array), and `specs` (object).
Categories: `Clad Door`, `Custom Furniture`, `Can Accessories`. EGFIT remains a project-services division.
