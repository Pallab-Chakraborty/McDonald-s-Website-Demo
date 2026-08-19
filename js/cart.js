// ─── CART ───────────────────────────────────────────────────
function addToCart(name, price, emoji){
  const ex = cart.find(i=>i.name===name);
  if(ex) ex.qty++;
  else cart.push({name,price,emoji,qty:1});
  refreshCart();
  toast(`${emoji} ${name} added!`);
}
function dec(name){
  const i = cart.find(x=>x.name===name);
  if(!i) return;
  if(i.qty>1) i.qty--;
  else cart = cart.filter(x=>x.name!==name);
  refreshCart();
}
function inc(name){
  const i = cart.find(x=>x.name===name);
  if(i) { i.qty++; refreshCart(); }
}
function del(name){
  cart = cart.filter(x=>x.name!==name);
  refreshCart();
}

function refreshCart(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  const sub   = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const delFee = delivery==='delivery' ? 29 : 0;
  const disc   = promo ? 30 : 0;
  const total  = sub + delFee - disc;

  // nav badge
  const nb = document.getElementById('navBadge');
  nb.textContent = count;
  nb.className = 'cart-badge' + (count>0?' on':'');

  // header count
  document.getElementById('cartCount').textContent = count+' item'+(count!==1?'s':'');

  // items
  const iw = document.getElementById('itemsWrap');
  if(cart.length===0){
    iw.innerHTML=`<div class="cart-empty"><div class="ei">🛒</div><h3>Cart is empty</h3><p>Add tasty items from the menu below!</p><button class="btn-primary" onclick="closeCart();document.getElementById('menu').scrollIntoView({behavior:'smooth'})">Browse Menu</button></div>`;
  } else {
    iw.innerHTML = cart.map(item=>`
      <div class="ci">
        <div class="ci-emoji">${item.emoji}</div>
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">₹${item.price*item.qty}</div>
        </div>
        <div class="ci-ctrl">
          <button class="q-btn" onclick="dec('${item.name}')">−</button>
          <span class="q-num">${item.qty}</span>
          <button class="q-btn" onclick="inc('${item.name}')">+</button>
          <button class="ci-del" onclick="del('${item.name}')">🗑</button>
        </div>
      </div>`).join('');
  }

  // upsell
  const uw = document.getElementById('upsellWrap');
  if(cart.length>0 && !cart.find(i=>i.name==='Large Fries')){
    uw.innerHTML=`<div class="upsell-bar"><span class="ui">🍟</span><div><strong>Add Large Fries?</strong><span>Only ₹99 — complete your meal</span></div><button onclick="addToCart('Large Fries',99,'🍟')">+ Add</button></div>`;
  } else { uw.innerHTML=''; }

  // summary
  document.getElementById('summaryWrap').innerHTML=`
    <div class="s-row"><span>Subtotal (${count} items)</span><span>₹${sub}</span></div>
    <div class="s-row"><span>Delivery fee</span><span>${delFee===0?'<span style="color:#27AE60;font-weight:800">FREE</span>':'₹'+delFee}</span></div>
    ${disc?`<div class="s-row"><span>Promo discount</span><span class="disc">−₹${disc}</span></div>`:''}
    <div class="s-row total"><span class="sl">Total</span><span class="sv">₹${total}</span></div>`;

  // action button
  const btn = document.getElementById('actBtn');
  const txt = document.getElementById('actTxt');
  if(step===1){ btn.disabled=cart.length===0; txt.textContent=cart.length===0?'Add items to continue':'Proceed to Delivery →'; }
  else if(step===2){ btn.disabled=false; txt.textContent='Continue to Payment →'; }
  else if(step===3){ btn.disabled=false; txt.textContent=`Place Order — ₹${total} 🍔`; }
}

