/* EGCAN Holding — product catalogue and front-end shopping bag */
(() => {
  "use strict";
  const products = [
    {id:"pivot-01",name:"Architectural Pivot Door",category:"Clad Door",price:"Price on request",tag:"Signature entrance",description:"A contemporary pivot-door concept with a strong architectural presence. Final dimensions, cladding, hardware and finish are confirmed against the project brief.",images:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Clad Door",Type:"Pivot door concept",Finish:"Confirm by enquiry",Dimensions:"Made to project specification"}},
    {id:"clad-02",name:"Textured Clad Entrance",category:"Clad Door",price:"Price on request",tag:"Material study",description:"A refined cladding direction for a modern entrance. Share opening dimensions and preferred materials for a tailored discussion.",images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Clad Door",Style:"Textured cladding concept",Finish:"To be confirmed",Availability:"On request"}},
    {id:"flush-03",name:"Minimal Flush Door",category:"Clad Door",price:"Price on request",tag:"Minimal profile",description:"A restrained door concept designed to sit quietly within contemporary architecture. Configuration and hardware are project-specific.",images:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Clad Door",Style:"Flush concept",Hardware:"Confirm by enquiry",Dimensions:"Project-specific"}},
    {id:"timber-04",name:"Timber Statement Door",category:"Clad Door",price:"Price on request",tag:"Warm materials",description:"A warm material direction for a distinctive residential or hospitality entrance. Timber species and finish require confirmation.",images:["https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Clad Door",Material:"Timber finish concept",Finish:"To be confirmed",Availability:"On request"}},
    {id:"double-05",name:"Double Entrance Concept",category:"Clad Door",price:"Price on request",tag:"Grand entrance",description:"A wider entrance concept for projects that call for a strong arrival sequence. Opening, structure and finish are developed to suit the site.",images:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Clad Door",Type:"Double entrance concept",Dimensions:"Site-measured",Availability:"On request"}},
    {id:"bespoke-01",name:"EG Bespoke Lounge Chair",category:"EG Bespoke",price:"Price on request",tag:"EG Bespoke",description:"A sculptural seating concept for considered interiors. Upholstery, timber, dimensions and finish can be discussed for a custom order.",images:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"EG Bespoke",Line:"EG Bespoke",Materials:"Confirm by enquiry",Dimensions:"Custom options to be confirmed"}},
    {id:"table-02",name:"Contemporary Side Table",category:"EG Bespoke",price:"Price on request",tag:"Living",description:"A versatile side-table concept for living spaces and hospitality settings. Final material, size and finish are confirmed with the project.",images:["https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"EG Bespoke",Type:"Side table concept",Materials:"To be confirmed",Availability:"On request"}},
    {id:"sofa-03",name:"Modular Sofa Concept",category:"EG Bespoke",price:"Price on request",tag:"Made to order",description:"Flexible seating designed around the proportions and use of a room. Configuration, upholstery and dimensions are confirmed by enquiry.",images:["https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"EG Bespoke",Type:"Modular seating concept",Upholstery:"Confirm by enquiry",Dimensions:"Made to order"}},
    {id:"dining-04",name:"Sculpted Dining Table",category:"EG Bespoke",price:"Price on request",tag:"Dining",description:"A statement dining-table direction for residential and hospitality settings. Materials, size and edge details are tailored to the brief.",images:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"EG Bespoke",Type:"Dining table concept",Material:"Confirm by enquiry",Dimensions:"Project-specific"}},
    {id:"console-05",name:"Architectural Console",category:"EG Bespoke",price:"Price on request",tag:"EG Bespoke",description:"A considered console concept for entrances, living spaces and hospitality interiors. Bespoke proportions and finishes are available by project.",images:["https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"EG Bespoke",Line:"EG Bespoke",Finish:"Confirm by enquiry",Availability:"On request"}},
    {id:"object-01",name:"Sculptural Wood Object",category:"Can Accessories",price:"Price on request",tag:"Design object",description:"A decorative object concept that adds warmth and texture to a shelf, table or styled interior. Enquire for current availability.",images:["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Can Accessories",Material:"Confirm by enquiry",Finish:"Confirm by enquiry",Availability:"On request"}},
    {id:"decor-02",name:"Decorative Accent Piece",category:"Can Accessories",price:"Price on request",tag:"Accessories",description:"A considered finishing touch for contemporary interiors. Ask us about available materials, colourways and dimensions.",images:["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Can Accessories",Style:"Decorative object",Specifications:"On request",Availability:"On request"}},
    {id:"lamp-03",name:"Ambient Table Lighting",category:"Can Accessories",price:"Price on request",tag:"Lighting",description:"An ambient lighting concept selected to complement warm, layered interiors. Electrical specifications and availability must be confirmed.",images:["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Can Accessories",Type:"Lighting concept",Specifications:"Confirm by enquiry",Availability:"On request"}},
    {id:"vase-04",name:"Textured Decorative Vessel",category:"Can Accessories",price:"Price on request",tag:"Decor",description:"A sculptural vessel concept for shelves, consoles and tables. Material, finish and dimensions are subject to confirmation.",images:["https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Can Accessories",Type:"Decorative vessel",Material:"Confirm by enquiry",Availability:"On request"}},
    {id:"tray-05",name:"Curated Serving Tray",category:"Can Accessories",price:"Price on request",tag:"Everyday objects",description:"A practical styling piece for entertaining and everyday use. Available materials and dimensions are confirmed by enquiry.",images:["https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Can Accessories",Type:"Serving tray concept",Finish:"Confirm by enquiry",Availability:"On request"}}
  ];
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const getProduct = id => products.find(p => p.id === id) || products[0];
  const card = p => `<article class="product-card" data-card-category="${escapeHTML(p.category)}"><a class="product-card-image" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${escapeHTML(p.name)}"><img class="product-image-primary" src="${p.images[0]}" alt="${escapeHTML(p.name)}" loading="lazy"><img class="product-image-secondary" src="${p.images[1] || p.images[0]}" alt="${escapeHTML(p.name)} alternate view" loading="lazy"><span class="product-tag">${escapeHTML(p.tag)}</span><span class="product-hover-action">View details ↗</span></a><div class="product-card-copy"><span class="product-category">${escapeHTML(p.category)}</span><h3><a href="product.html?id=${encodeURIComponent(p.id)}">${escapeHTML(p.name)}</a></h3><p class="product-price">${escapeHTML(p.price)}</p><div class="product-card-actions"><a class="small-button" href="product.html?id=${encodeURIComponent(p.id)}">Discover piece ↗</a><button class="small-button secondary" data-add="${escapeHTML(p.id)}">Add to bag +</button></div></div></article>`;
  const categoryFromURL = () => new URLSearchParams(location.search).get("category") || "All";
  function renderGrids(){
    $$("[data-product-grid]").forEach(grid=>{
      const category = grid.dataset.category || "All";
      const limit = Number(grid.dataset.limit || 0);
      let list = products.filter(p => category === "All" || p.category === category);
      if(limit) list = list.slice(0,limit);
      grid.innerHTML = list.length ? list.map(card).join("") : '<p class="no-results">No products are listed in this category yet. Please contact us for available options.</p>';
    });
  }
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("egcanBag") || "[]"); if(!Array.isArray(cart)) cart=[]; } catch(e){ cart=[]; }
  function saveCart(){ try{localStorage.setItem("egcanBag",JSON.stringify(cart));}catch(e){} renderCart(); }
  function addToCart(id, qty=1){ const p=getProduct(id); qty=Math.max(1,Math.min(99,Number(qty)||1)); const found=cart.find(i=>i.id===p.id); if(found) found.qty=Math.min(99,found.qty+qty); else cart.push({id:p.id,qty}); saveCart(); openCart(); }
  function totalQty(){return cart.reduce((sum,i)=>sum+i.qty,0);}
  function renderCart(){
    $$("[data-cart-count]").forEach(el=>el.textContent=totalQty());
    const items=$("[data-cart-items]");
    if(items){
      if(!cart.length) items.innerHTML='<p class="cart-empty">Your bag is empty. Explore the collection to add a selection.</p>';
      else items.innerHTML=cart.map(i=>{const p=getProduct(i.id);return `<div class="cart-item"><img src="${p.images[0]}" alt=""><div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.category)} · ${escapeHTML(p.price)}</p><input type="number" min="1" max="99" value="${i.qty}" aria-label="Quantity for ${escapeHTML(p.name)}" data-qty="${p.id}"></div><button class="cart-remove" data-remove="${p.id}" aria-label="Remove ${escapeHTML(p.name)}">×</button></div>`}).join("");
    }
    const checkout=$("[data-checkout]");
    if(checkout){
      const lines=cart.map(i=>`${i.qty} x ${getProduct(i.id).name} (${getProduct(i.id).category})`).join("\n");
      checkout.href="mailto:hello@egcan.example?subject="+encodeURIComponent("EGCAN shop enquiry")+"&body="+encodeURIComponent("Hello EGCAN,\n\nI would like to enquire about these selections:\n"+(lines||"(My bag is empty)")+"\n\nPlease confirm pricing, availability, specifications and delivery.\n\nThank you.");
    }
  }
  const drawer=$("[data-cart-drawer]"), backdrop=$("[data-cart-backdrop]");
  function openCart(){if(drawer){drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");backdrop?.classList.add("open");document.body.classList.add("cart-open");}}
  function closeCart(){if(drawer){drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");backdrop?.classList.remove("open");document.body.classList.remove("cart-open");}}
  function renderDetail(){
    const main=$("[data-detail-main]"); if(!main) return;
    const id=new URLSearchParams(location.search).get("id"); const p=getProduct(id);
    document.title=p.name+" | EGCAN Holding";
    $("[data-product-category]").textContent=p.category;
    $("[data-detail-category]").textContent=p.category.toUpperCase();
    $("[data-detail-name]").textContent=p.name;
    $("[data-detail-price]").textContent=p.price;
    $("[data-detail-description]").textContent=p.description;
    main.src=p.images[0];main.alt=p.name;
    $("[data-detail-thumbnails]").innerHTML=p.images.map((src,i)=>`<button class="product-thumbnail ${i===0?"active":""}" data-image-index="${i}" aria-label="View image ${i+1}"><img src="${src}" alt=""></button>`).join("");
    $("[data-detail-specs]").innerHTML=Object.entries(p.specs).map(([k,v])=>`<div><dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd></div>`).join("");
    $("[data-detail-add]").dataset.detailAdd=p.id;
    $("[data-detail-enquire]").href="mailto:hello@egcan.example?subject="+encodeURIComponent("Enquiry about "+p.name)+"&body="+encodeURIComponent("Hello EGCAN,\n\nI would like more information about "+p.name+". Please confirm pricing, availability, specifications and delivery.");
    const grid=$("[data-product-grid]"); if(grid) grid.dataset.limit="4";
  }
  document.addEventListener("click",e=>{
    const toggle=e.target.closest(".menu-toggle");
    if(toggle){const nav=$("#primary-nav");const isOpen=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(isOpen));toggle.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation");}
    const add=e.target.closest("[data-add]"); if(add) addToCart(add.dataset.add);
    const detailAdd=e.target.closest("[data-detail-add]"); if(detailAdd){const qty=$("[data-detail-qty]");addToCart(detailAdd.dataset.detailAdd,qty?qty.value:1);}
    const open=e.target.closest("[data-cart-open]"); if(open) openCart();
    if(e.target.closest("[data-cart-close]") || e.target===backdrop) closeCart();
    const remove=e.target.closest("[data-remove]"); if(remove){cart=cart.filter(i=>i.id!==remove.dataset.remove);saveCart();}
    const thumb=e.target.closest("[data-image-index]"); if(thumb){const p=getProduct(new URLSearchParams(location.search).get("id"));const idx=Number(thumb.dataset.imageIndex);const main=$("[data-detail-main]");main.src=p.images[idx];$$("[data-image-index]").forEach(b=>b.classList.toggle("active",b===thumb));}
    const filter=e.target.closest("[data-filter]"); if(filter){$$("[data-filter]").forEach(b=>b.classList.toggle("active",b===filter));const grid=$(".shop-product-grid");if(grid){const category=filter.dataset.filter;const list=products.filter(p=>category==="All"||p.category===category);grid.innerHTML=list.length?list.map(card).join(""):'<p class="no-results">No products are listed in this category yet.</p>';}}
  });
  document.addEventListener("change",e=>{const input=e.target.closest("[data-qty]");if(input){const item=cart.find(i=>i.id===input.dataset.qty);if(item){item.qty=Math.max(1,Math.min(99,Number(input.value)||1));saveCart();}}});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart();});

  const enquiryBackdrop = $("[data-enquiry-backdrop]");
  const enquiryModal = $(".enquiry-modal");
  function openEnquiry(){
    if(!enquiryModal) return;
    enquiryModal.classList.add("open");
    enquiryModal.scrollTop=0;
    enquiryModal.setAttribute("aria-hidden","false");
    enquiryBackdrop?.classList.add("open");
    enquiryBackdrop?.setAttribute("aria-hidden","false");
    document.body.classList.add("enquiry-open");
    enquiryModal.querySelector('input[name="name"]')?.focus();
  }
  function closeEnquiry(){
    if(!enquiryModal) return;
    enquiryModal.classList.remove("open");
    enquiryModal.setAttribute("aria-hidden","true");
    enquiryBackdrop?.classList.remove("open");
    enquiryBackdrop?.setAttribute("aria-hidden","true");
    document.body.classList.remove("enquiry-open");
  }
  document.addEventListener("click",e=>{
    if(e.target.closest("[data-open-enquiry]")){e.preventDefault();openEnquiry();}
    if(e.target.closest("[data-enquiry-close]") || e.target===enquiryBackdrop) closeEnquiry();
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeEnquiry();closeCart();}});
  const enquiryForm=$("[data-enquiry-form]");
  if(enquiryForm){
    enquiryForm.addEventListener("submit",e=>{
      e.preventDefault();
      const data=new FormData(enquiryForm);
      const name=String(data.get("name")||"").trim();
      const email=String(data.get("email")||"").trim();
      const phone=String(data.get("phone")||"").trim();
      const interest=String(data.get("interest")||"General enquiry");
      const message=String(data.get("message")||"").trim();
      const subject="EGCAN website enquiry — "+interest;
      const body=["Hello EGCAN,","","Name: "+name,"Email: "+email,"Phone: "+phone,"Interest: "+interest,"","Project details:",message].join("\n");
      const status=$("[data-form-status]");
      if(status) status.textContent="Your enquiry is ready. Your email app will open so you can review it and press Send.";
      window.location.href="mailto:hello@egcan.example?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
    });
  }

  const year=$("[data-year]");if(year)year.textContent=new Date().getFullYear();
  renderGrids(); renderDetail(); renderCart();
  const initialCategory=categoryFromURL();
  if(initialCategory!=="All"){const filter=$(`[data-filter="${CSS.escape(initialCategory)}"]`);if(filter)filter.click();}
})();