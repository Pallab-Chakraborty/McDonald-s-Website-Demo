// ─── STEPS ──────────────────────────────────────────────────
function goStep(n){
  step=n;
  [1,2,3,4].forEach(i=>{
    document.getElementById('p'+i).classList.toggle('active',i===n);
    const t=document.getElementById('st'+i);
    t.classList.remove('active','done');
    if(i===n) t.classList.add('active');
    else if(i<n) t.classList.add('done');
  });
  document.getElementById('cartFtr').style.display = n===4?'none':'';
  document.getElementById('stepBar').style.display  = n===4?'none':'';
  const titles=['Your Cart','Delivery','Payment','Order Confirmed!'];
  document.getElementById('cartTitle').textContent = titles[n-1];
  refreshCart();
}

function primaryAction(){
  if(step===1 && cart.length>0) goStep(2);
  else if(step===2) goStep(3);
  else if(step===3) placeOrder();
}

function placeOrder(){
  const id='MCD-'+Math.floor(100000+Math.random()*900000);
  document.getElementById('orderIdTxt').textContent=id;
  goStep(4);
  setTimeout(animateTrack, 700);
}

function animateTrack(){
  const prog = document.getElementById('tProg');
  [[2,'33%',1200],[3,'66%',2400]].forEach(([i,w,d])=>{
    setTimeout(()=>{
      prog.style.width=w;
      const ts=document.getElementById('ts'+i);
      ts.classList.add('done');
      ts.querySelector('.t-dot').classList.remove('active');
      ts.querySelector('.t-dot').classList.add('done');
      ts.querySelector('.t-dot').textContent='✓';
      ts.querySelector('.t-lbl').style.color='var(--dark)';
      const nx=document.getElementById('ts'+(i+1));
      if(nx) nx.querySelector('.t-dot').classList.add('active');
    },d);
  });
}

function resetOrder(){
  cart=[]; promo=false; delivery='delivery'; payMethod='card';
  goStep(1); refreshCart(); closeCart();
  toast('🍔 Ready for your next order!');
}

// ─── PROMO ──────────────────────────────────────────────────
function applyPromo(){
  const v=document.getElementById('promoInp').value.trim().toUpperCase();
  if(v.length>0){ promo=true; document.getElementById('promoOk').classList.add('on'); refreshCart(); toast('🎉 Promo applied!'); }
}

// ─── DELIVERY TYPE ──────────────────────────────────────────
function setDelivery(t){
  delivery=t;
  document.getElementById('dBtn').classList.toggle('sel',t==='delivery');
  document.getElementById('pBtn').classList.toggle('sel',t==='pickup');
  document.getElementById('dFields').style.display=t==='delivery'?'':'none';
  document.getElementById('pFields').style.display=t==='pickup'?'':'none';
  refreshCart();
}

// ─── PAYMENT ────────────────────────────────────────────────
function setPay(btn,method){
  payMethod=method;
  document.querySelectorAll('.pm').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  document.getElementById('cardBox').style.display = method==='card'?'':'none';
  document.getElementById('upiBox').style.display  = method==='upi'?'':'none';
  document.getElementById('gpayBox').style.display = method==='gpay'?'':'none';
  document.getElementById('codBox').style.display  = method==='cod'?'':'none';
}
function fmtCard(el){ let v=el.value.replace(/\D/g,'').substring(0,16); el.value=v.replace(/(.{4})/g,'$1  ').trim(); }
function fmtExp(el){ let v=el.value.replace(/\D/g,''); if(v.length>=2) v=v.substring(0,2)+' / '+v.substring(2,4); el.value=v; }
