// ─── STATE ──────────────────────────────────────────────────
let cart = [];
let step = 1;
let promo = false;
let delivery = 'delivery';
let payMethod = 'card';


// ─── OPEN / CLOSE ────────────────────────────────────────────
function openCart(){ document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); document.body.style.overflow='hidden'; refreshCart(); }
function closeCart(){ document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); document.body.style.overflow=''; }

// ─── TOAST ──────────────────────────────────────────────────
let tt;
function toast(msg){ clearTimeout(tt); const el=document.getElementById('miniToast'); el.textContent=msg; el.classList.add('show'); tt=setTimeout(()=>el.classList.remove('show'),2500); }

// ─── STICKY BAR ─────────────────────────────────────────────
window.addEventListener('scroll',()=>{ document.getElementById('orderBar').classList.toggle('visible',scrollY>500); });

// ─── MOBILE MENU ────────────────────────────────────────────
function toggleMenu(){ const l=document.querySelector('.nav-links'); l.style.cssText = l.style.display==='flex'?'':'display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:var(--red);padding:20px;gap:8px;z-index:999'; }

// ─── SCROLL ANIMATIONS ──────────────────────────────────────
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}}),{threshold:0.1});
document.querySelectorAll('.menu-card,.step-card,.review-card,.ai-feat,.deal-card').forEach(el=>{ el.style.opacity='0'; el.style.transform='translateY(20px)'; el.style.transition='opacity 0.5s ease,transform 0.5s ease'; obs.observe(el); });

refreshCart();
