# EGCAN Holding — GitHub Pages website

This is the complete static website package for the EGCAN Holding GitHub Pages repository.

## Website structure
- `index.html` — home page and division overview
- `clad-door.html` — Clad Door division
- `custom-furniture.html` — EG Bespoke division (filename retained to preserve existing links)
- `can-accessories.html` — Can Accessories division
- `egfit.html` — EGFIT retail fit-out services
- `shop.html` — product collection, filters and shopping bag
- `product.html` — product detail page
- `styles.css` — shared responsive design
- `script.js` — product catalogue, filters, galleries, bag and enquiry interactions

## Publish to GitHub Pages
1. Download and extract this ZIP.
2. Open the repository: https://github.com/waleeedm/egcan-website
3. Open the repository root (the same level where `index.html` belongs).
4. Select **Add file → Upload files**.
5. Upload all 10 files from the extracted folder. Do not upload the ZIP itself and do not place the files inside an extra nested folder.
6. Commit the changes to the `main` branch.
7. Open the GitHub Pages website and test every navigation link, product page, mobile menu, filters, shopping bag and enquiry modal.

## Before the website is treated as fully live
- **Company enquiry email:** `hello@egcan.example` is still a placeholder in `script.js`. Replace every occurrence with the real company email before publishing. The enquiry form opens in an on-page modal and prepares an email in the visitor's email app; it does not submit directly to a company inbox. Direct web submissions require a real form service/backend and its endpoint.
- **Samaq Al Maakan — Saudi Arabia:** the partner is named correctly in the footer, but its external website URL has not been supplied. Add the confirmed URL to make this an active external link.
- **Logo:** the selected approved logo asset was not included with the supplied source files. The existing text wordmark is retained; no replacement logo has been invented.
- **Photography:** Unsplash images are illustrative references, not verified EGCAN project photographs. Replace with approved company photography before presenting the galleries as completed projects.
- **Products:** the 15 catalogue entries are sample concepts (five per category), not a verified inventory. Confirm names, specifications, pricing, availability, lead times and delivery terms before accepting orders.
- **Commerce:** the shopping bag is an enquiry basket. There is no payment gateway, live checkout, stock management, order database, shipping calculation or customer account system.
- **EGFIT:** the four-stage shell-to-handover gallery explains a typical process and is illustrative, not a documentary record of a specific completed project.

## Editing the catalogue
Edit the `products` array near the top of `script.js`. Categories are `Clad Door`, `EG Bespoke` and `Can Accessories`. EGFIT is a project-services division and is not a shop category.

## External partner link
When the official Samaq Al Maakan website address is confirmed, replace the footer placeholder text in each HTML page with a link to that exact URL. Do not guess the domain.
