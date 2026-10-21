/* EGCAN Holding — product catalogue and front-end shopping bag */
(() => {
  "use strict";
  const products = [
    {id:"pivot-01",name:"Architectural Pivot Door",category:"Clad Door",price:"Price on request",tag:"Architectural",description:"A contemporary entrance concept with a strong material presence. Final dimensions, cladding and hardware depend on the project brief.",images:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Clad Door",Finish:"Confirm by enquiry",Dimensions:"Made to project specification",Availability:"On request"}},
    {id:"clad-02",name:"Textured Clad Door",category:"Clad Door",price:"Price on request",tag:"Made to measure",description:"A refined cladding direction for a modern entrance. Share your opening dimensions and preferred finish for a project-specific discussion.",images:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Clad Door",Finish:"To be confirmed",Dimensions:"Project-specific",Availability:"On request"}},
    {id:"bespoke-01",name:"Bespoke Lounge Chair",category:"Custom Furniture",price:"Price on request",tag:"EG Bespoke",description:"A comfortable sculptural seating concept for considered interiors. Upholstery, timber, dimensions and finish can be discussed for a custom order.",images:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Custom Furniture",Line:"EG Bespoke",Materials:"Confirm by enquiry",Dimensions:"Custom options to be confirmed"}},
    {id:"table-02",name:"Contemporary Side Table",category:"Custom Furniture",price:"Price on request",tag:"Furniture",description:"A versatile side-table concept for living spaces and hospitality settings. Final material, size and finish are confirmed with the order.",images:["https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Custom Furniture",Materials:"To be confirmed",Dimensions:"To be confirmed",Availability:"On request"}},
    {id:"object-01",name:"Sculptural Wood Object",category:"Can Accessories",price:"Price on request",tag:"Design object",description:"A decorative object concept that adds warmth and texture to a shelf, table or styled interior. Please enquire for the current available range.",images:["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Can Accessories",Material:"Confirm by enquiry",Finish:"Confirm by enquiry",Availability:"On request"}},
    {id:"decor-02",name:"Decorative Accent Piece",category:"Can Accessories",price:"Price on request",tag:"Accessories",description:"A considered finishing touch for contemporary interiors. Ask us about available materials, colourways and dimensions.",images:["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85"],specs:{Division:"Can Accessories",Style:"Decorative object",Specifications:"On request",Availability:"On request"}}
  ];
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const getProduct = id => products.find(p => p.id === id) || products[0];
  const card = p => `<article class="product-card" data-card-category="${escapeHTML(p.category)}"><a class="product-card-image" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${escapeHTML(p.name)}"><img src="${p.images[0]}" alt="${escapeHTML(p.name)}" loading="lazy"><span class="product-tag">${escapeHTML(p.tag)}</span></a><div class="product-card-copy"><span class="product-category">${escapeHTML(p.category)}</span><h3><a href="product.html?id=${encodeURIComponent(p.id)}">${escapeHTML(p.name)}</a></h3><p class="product-price">${escapeHTML(p.price)}</p><div class="product-card-actions"><a class="small-button" href="product.html?id=${encodeURIComponent(p.id)}">Shop Now ↗</a><button class="small-button secondary" data-add="${escapeHTML(p.id)}">Add to bag +</button></div></div></article>`;
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
  const year=$("[data-year]");if(year)year.textContent=new Date().getFullYear();
  renderGrids(); renderDetail(); renderCart();
  const initialCategory=categoryFromURL();
  if(initialCategory!=="All"){const filter=$(`[data-filter="${CSS.escape(initialCategory)}"]`);if(filter)filter.click();}
})();