/* EGCAN Holding — product catalogue, local demo bag, gallery and on-page enquiries.
   Keep products/specifications illustrative until approved catalogue data is supplied. */
(() => {
  "use strict";
  const CONTACT_EMAIL = "hello@egcan.example"; // Replace with the approved EGCAN inbox before launch.
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  let products = [];
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("egcanBag") || "[]"); if(!Array.isArray(cart)) cart=[]; } catch(e) { cart=[]; }
  const categories = ["All","Clad Door","Custom Furniture","Can Accessories"];
  const categoryFromURL = () => new URLSearchParams(location.search).get("category") || "All";
  const getProduct = id => products.find(p => p.id === id) || products[0];
  const card = p => `<article class="product-card" data-card-category="${escapeHTML(p.category)}">
    <a class="product-card-image" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${escapeHTML(p.name)}">
      <img class="product-main" src="${p.images[0]}" alt="${escapeHTML(p.name)} — main view" loading="lazy">
      <img class="product-alt" src="${p.images[1] || p.images[0]}" alt="${escapeHTML(p.name)} — alternate view" loading="lazy">
      <span class="product-tag">${escapeHTML(p.tag)}</span>
    </a>
    <div class="product-card-copy"><span class="product-category">${escapeHTML(p.category)}</span>
      <h3><a href="product.html?id=${encodeURIComponent(p.id)}">${escapeHTML(p.name)}</a></h3>
      <p class="product-price">${escapeHTML(p.price)}</p>
      <div class="product-card-actions"><a class="small-button" href="product.html?id=${encodeURIComponent(p.id)}">View details ↗</a><button class="small-button secondary" type="button" data-add="${escapeHTML(p.id)}">Add to bag +</button></div>
    </div></article>`;
  function renderGrids(){
    $$("[data-product-grid]").forEach(grid=>{
      const category = grid.dataset.category || "All";
      const limit = Number(grid.dataset.limit || 0);
      let list = products.filter(p => category === "All" || p.category === category);
      if(limit) list = list.slice(0,limit);
      grid.innerHTML = list.length ? list.map(card).join("") : '<p class="no-results">No products are listed in this category yet. Please contact us for available options.</p>';
    });
  }
  function saveCart(){ try{localStorage.setItem("egcanBag",JSON.stringify(cart));}catch(e){} renderCart(); }
  function totalQty(){return cart.reduce((sum,i)=>sum+i.qty,0);}
  function addToCart(id, qty=1){
    const p=getProduct(id); if(!p)return;
    qty=Math.max(1,Math.min(99,Number(qty)||1));
    const found=cart.find(i=>i.id===p.id);
    if(found) found.qty=Math.min(99,found.qty+qty); else cart.push({id:p.id,qty});
    saveCart(); openCart();
  }
  function renderCart(){
    $$("[data-cart-count],.cart-count").forEach(el=>el.textContent=totalQty());
    const items=$("[data-cart-items]");
    if(items){
      if(!cart.length) items.innerHTML='<p class="cart-empty">Your bag is empty. Explore the collection to add a selection.</p>';
      else items.innerHTML=cart.map(i=>{const p=getProduct(i.id);if(!p)return "";return `<div class="cart-item"><img src="${p.images[0]}" alt="${escapeHTML(p.name)}"><div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.category)} · ${escapeHTML(p.price)}</p><input type="number" min="1" max="99" value="${i.qty}" aria-label="Quantity for ${escapeHTML(p.name)}" data-qty="${p.id}"></div><button class="cart-remove" data-remove="${p.id}" aria-label="Remove ${escapeHTML(p.name)}">×</button></div>`}).join("");
    }
    const checkout=$("[data-checkout]");
    if(checkout){
      const lines=cart.map(i=>`${i.qty} x ${getProduct(i.id).name} (${getProduct(i.id).category})`).join("\n");
      checkout.href="mailto:"+CONTACT_EMAIL+"?subject="+encodeURIComponent("EGCAN shop enquiry")+"&body="+encodeURIComponent("Hello EGCAN,\n\nI would like to enquire about these selections:\n"+(lines||"(My bag is empty)")+"\n\nPlease confirm pricing, availability, specifications and delivery.\n\nThank you.");
    }
  }
  const drawer=$("[data-cart-drawer]"), backdrop=$("[data-cart-backdrop]");
  function openCart(){if(drawer){drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");backdrop?.classList.add("open");document.body.classList.add("cart-open");}}
  function closeCart(){if(drawer){drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");backdrop?.classList.remove("open");document.body.classList.remove("cart-open");}}
  function renderDetail(){
    const main=$("[data-detail-main]"); if(!main)return;
    const p=getProduct(new URLSearchParams(location.search).get("id")); if(!p)return;
    document.title=p.name+" | EGCAN Holding";
    const cat=$("[data-product-category]"),cat2=$("[data-detail-category]"),name=$("[data-detail-name]"),price=$("[data-detail-price]"),desc=$("[data-detail-description]");
    if(cat)cat.textContent=p.category;if(cat2)cat2.textContent=p.category.toUpperCase();if(name)name.textContent=p.name;if(price)price.textContent=p.price;if(desc)desc.textContent=p.description;
    main.src=p.images[0];main.alt=p.name;
    const thumbs=$("[data-detail-thumbnails]");
    if(thumbs)thumbs.innerHTML=p.images.map((src,i)=>`<button type="button" class="product-thumbnail ${i===0?"active":""}" data-image-index="${i}" aria-label="View image ${i+1}"><img src="${src}" alt=""></button>`).join("");
    const specs=$("[data-detail-specs]");
    if(specs)specs.innerHTML=Object.entries(p.specs||{}).map(([k,v])=>`<div><dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd></div>`).join("");
    const add=$("[data-detail-add]");if(add)add.dataset.detailAdd=p.id;
    const enquire=$("[data-detail-enquire]");if(enquire){enquire.dataset.inquiryOpen="";enquire.dataset.product=p.name;enquire.href="#project-enquiry";}
    const grid=$("[data-product-grid]");if(grid)grid.dataset.limit="4";
  }
  function showModal(product=""){
    const modal=$("[data-inquiry-modal]");if(!modal)return;
    modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
    const field=$("[name='product']",modal);if(field)field.value=product;
    const first=$("input",modal);if(first)first.focus();
  }
  function hideModal(){const modal=$("[data-inquiry-modal]");if(!modal)return;modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");}
  function bindInquiry(form){
    if(!form)return;
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=String(data.get("name")||"").trim(),email=String(data.get("email")||"").trim(),message=String(data.get("message")||"").trim();
      const status=$("[data-form-status]",form);
      if(!name||!email||!message){if(status)status.textContent="Please complete your name, email and project details.";return;}
      const service=String(data.get("service")||data.get("product")||"Project enquiry");
      const phone=String(data.get("phone")||"");
      const subject=encodeURIComponent("EGCAN enquiry — "+service);
      const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService / product: ${service}\n\nProject details:\n${message}\n\nPlease follow up with me about this enquiry.`);
      if(status)status.textContent="Your enquiry is ready. Your email app will open with the details prepared; press Send there to deliver it.";
      // Email opens only after the visitor submits. The form itself stays inside the website.
      window.location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    });
  }
  document.addEventListener("click",e=>{
    const toggle=e.target.closest(".menu-toggle");
    if(toggle){const nav=$(".nav,.main-nav");if(nav){const isOpen=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(isOpen));toggle.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation");}}
    const add=e.target.closest("[data-add]");if(add)addToCart(add.dataset.add);
    const detailAdd=e.target.closest("[data-detail-add]");if(detailAdd){const qty=$("[data-detail-qty]");addToCart(detailAdd.dataset.detailAdd,qty?qty.value:1);}
    if(e.target.closest("[data-cart-open]"))openCart();
    if(e.target.closest("[data-cart-close]")||e.target===backdrop)closeCart();
    const remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(i=>i.id!==remove.dataset.remove);saveCart();}
    const thumb=e.target.closest("[data-image-index]");if(thumb){const p=getProduct(new URLSearchParams(location.search).get("id"));const idx=Number(thumb.dataset.imageIndex);const main=$("[data-detail-main]");if(main&&p&&p.images[idx])main.src=p.images[idx];$$("[data-image-index]").forEach(b=>b.classList.toggle("active",b===thumb));}
    const filter=e.target.closest("[data-filter]");if(filter){$$("[data-filter]").forEach(b=>b.classList.toggle("active",b===filter));const grid=$(".shop-product-grid");if(grid){const category=filter.dataset.filter;const list=products.filter(p=>category==="All"||p.category===category);grid.innerHTML=list.length?list.map(card).join(""):'<p class="no-results">No products are listed in this category yet.</p>';}}
    const inquiry=e.target.closest("[data-inquiry-open]");if(inquiry){e.preventDefault();showModal(inquiry.dataset.product||"");}
    if(e.target.closest("[data-modal-close]")||e.target.matches("[data-inquiry-modal]"))hideModal();
  });
  document.addEventListener("change",e=>{const input=e.target.closest("[data-qty]");if(input){const item=cart.find(i=>i.id===input.dataset.qty);if(item){item.qty=Math.max(1,Math.min(99,Number(input.value)||1));saveCart();}}});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();hideModal();}});
  const year=$("[data-year]");if(year)year.textContent=new Date().getFullYear();
  const mainForm=$("#inquiryForm");bindInquiry(mainForm);bindInquiry($("[data-modal-form]"));
  fetch("products.json").then(r=>r.ok?r.json():Promise.reject()).then(data=>{products=Array.isArray(data)?data:[];renderGrids();renderDetail();renderCart();const initial=categoryFromURL();if(initial!=="All"){const match=$(`[data-filter="${CSS.escape(initial)}"]`);if(match)match.click();}}).catch(()=>{const grid=$("[data-product-grid]");if(grid)grid.innerHTML='<p class="no-results">The catalogue could not load. Please refresh or contact EGCAN.</p>';renderCart();});
})();
