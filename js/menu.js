// ─── MENU RENDER ────────────────────────────────────────────
function renderMenu(cat) {
  const items = cat==='all' ? MENU : MENU.filter(i=>i.cat===cat);
  document.getElementById('menuGrid').innerHTML = items.map(item=>`
    <div class="menu-card" onclick="addToCart('${item.name}',${item.price},'${item.emoji}')">
      <div class="menu-card-img">
        <span style="font-size:80px">${item.emoji}</span>
        ${item.badge?`<div class="card-badge">${item.badge}</div>`:''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">₹${item.price}</span>
          <button class="add-btn" onclick="event.stopPropagation();addToCart('${item.name}',${item.price},'${item.emoji}')">+</button>
        </div>
      </div>
    </div>`).join('');
}
function filterCat(btn,cat){
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
}
renderMenu('all');

