EGCAN Holding — complete website upgrade v2
============================================

FILES
- index.html
- egfit.html
- custom-furniture.html
- clad-door.html
- can-accessories.html
- shop.html
- product.html
- styles.css
- script.js
- products.json
- README.txt

WHAT'S IMPROVED
- Keeps the same page names, main EGCAN divisions, shared stylesheet/script architecture, product detail page, localStorage bag key (egcanBag), data-product-grid pattern, data-filter controls and product detail query (?id=...).
- Adds richer project process galleries: EGFIT empty shell → planning/preparation → build/finishing → handover; custom furniture brief → materials → craft/assembly → styling; plus Clad Door and Can Accessories galleries.
- Adds five product concepts in each of the three shop categories (15 total) with three image views per product, hover alternate images, category filtering, product detail pages, quantity selection, add/remove/update bag, and enquiry email draft.
- Adds an enquiry modal that opens within the page, plus embedded enquiry forms on the homepage and service pages.
- Responsive layouts for desktop, tablet and mobile.
- Uses the same primary architectural entrance photo for the Clad Door and EGFIT hero direction as requested.

IMPORTANT BEFORE UPLOADING
1. Make a backup of the current GitHub repository before replacing files.
2. Upload these files into the repository root (same folder as existing index.html), and commit to main.
3. Keep the existing approved egcan-logo-middle.png in the repository. The HTML references that existing asset.
4. Replace hello@egcan.example in script.js with the real EGCAN enquiry inbox before launch.
5. The enquiry form opens inside the site. On submit, it launches the visitor's configured email app with a prepared draft. To receive submissions without the visitor's email app, connect a backend/form endpoint; this static package cannot deliver/store enquiries server-side.
6. The bag is a front-end enquiry/demo bag, not full e-commerce: no payment gateway, stock database, order database, customer accounts or secure checkout.
7. Product names, finishes, availability and images are illustrative concepts. Prices remain “Price on request”. Replace with approved catalogue and actual EGCAN photos before making claims about real inventory or completed projects.
8. Image URLs point to Unsplash and require internet access. The stage/gallery images are real interior-design reference photography, not verified EGCAN completed projects. Replace with actual project progress photos as they become available.
9. Test on mobile after GitHub Pages deploys: menu, product filters, hover/tap cards, add/remove/update bag, product detail thumbnails, modal close/escape, form validation and enquiry draft.

RECOMMENDED SAFE DEPLOYMENT
- Download a copy of the current repository first.
- Upload all files above to the root without deleting egcan-logo-middle.png.
- Commit to main.
- Open the live Pages URL in a private/incognito tab to bypass cached CSS/JS.
- Test the homepage and all five divisions plus shop/product detail.
