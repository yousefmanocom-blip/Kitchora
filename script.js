// منيو كيتشورا - متحول من صور المنيو (جاهز للتسخين + جاهز للقلي)
// mode: heat = جاهز للتسخين | fry = جاهز للقلي
// الصور مقصوصة من صور المنيو نفسها وموجودة في images/menu/
const menuData = [
  // ===== جاهز للتسخين - أطباق الفراخ =====
  { id: 1, nameAr: "دجاج سويت أند سور", nameEn: "Chicken Sweet & Sour", category: "chicken", mode: "heat", sizeAr: "500 جم", sizeEn: "500g", price: 145, image: "images/menu/h-sweetsour.jpg" },
  { id: 2, nameAr: "دجاج BBQ", nameEn: "Chicken BBQ", category: "chicken", mode: "heat", sizeAr: "500 جم", sizeEn: "500g", price: 145, image: "images/menu/h-bbq.jpg" },
  { id: 3, nameAr: "دجاج صويا صوص", nameEn: "Chicken Soya Sauce", category: "chicken", mode: "heat", sizeAr: "500 جم", sizeEn: "500g", price: 135, image: "images/menu/h-soya.jpg" },
  { id: 4, nameAr: "ميني شاورما فراخ", nameEn: "Mini Chicken Shawarma", category: "chicken", mode: "heat", sizeAr: "6 قطع - 500 جم", sizeEn: "6 pcs - 500g", price: 160, image: "images/menu/h-mini-chicken.jpg" },
  { id: 5, nameAr: "ميني شاورما لحمة", nameEn: "Mini Beef Shawarma", category: "chicken", mode: "heat", sizeAr: "6 قطع - 500 جم", sizeEn: "6 pcs - 500g", price: 210, image: "images/menu/h-mini-beef.jpg" },
  { id: 6, nameAr: "شاورما فراخ مستوية", nameEn: "Chicken Shawarma (Cooked)", category: "chicken", mode: "heat", sizeAr: "500 جم", sizeEn: "500g", price: 175, image: "images/menu/h-shawarma-cooked.jpg" },

  // ===== جاهز للتسخين - أطباق اللحوم =====
  { id: 7, nameAr: "كفتة مشوية", nameEn: "Grilled Kofta", category: "meatHeat", mode: "heat", sizeAr: "500 جم قبل الشوي", sizeEn: "500g before grilling", price: 270, image: "images/menu/h-kofta.jpg" },
  { id: 8, nameAr: "عرض حواوشي قارب", nameEn: "Hawawshi Offer", category: "meatHeat", mode: "heat", sizeAr: "4 حواوشي قارب", sizeEn: "4 boat hawawshi", price: 180, image: "images/menu/h-hawawshi.jpg" },

  // ===== جاهز للتسخين - أكلات مصرية =====
  { id: 9, nameAr: "محشي ورق عنب", nameEn: "Stuffed Grape Leaves", category: "egyptian", mode: "heat", sizeAr: "500 جم", sizeEn: "500g", price: 95, image: "images/menu/h-grape.jpg" },
  { id: 10, nameAr: "محشي كرنب", nameEn: "Stuffed Cabbage", category: "egyptian", mode: "heat", sizeAr: "500 جم", sizeEn: "500g", price: 85, image: "images/menu/h-cabbage.jpg" },

  // ===== جاهز للقلي - أطباق اللحوم =====
  { id: 11, nameAr: "كفتة أرز", nameEn: "Rice Kofta", category: "fryMeat", mode: "fry", sizeAr: "400 جم", sizeEn: "400g", price: 85, image: "images/menu/f-rice-kofta.jpg" },
  { id: 12, nameAr: "ممبار محشي", nameEn: "Stuffed Mombar", category: "fryMeat", mode: "fry", sizeAr: "1 كجم", sizeEn: "1 kg", price: 180, image: "images/menu/f-mombar.jpg" },
  { id: 13, nameAr: "كوردن بلو سلامي", nameEn: "Cordon Bleu (Salami)", category: "fryMeat", mode: "fry", sizeAr: "500 جم", sizeEn: "500g", price: 165, image: "images/menu/f-cordon-salami.jpg" },
  { id: 14, nameAr: "كوردن بلو تركي مدخن", nameEn: "Cordon Bleu (Smoked Turkey)", category: "fryMeat", mode: "fry", price: 175, image: "images/menu/f-cordon-turkey.jpg" },
  { id: 15, nameAr: "بانيه بالبقسماط", nameEn: "Breaded Chicken Escalope", category: "fryMeat", mode: "fry", sizeAr: "500 جم", sizeEn: "500g", price: 165, image: "images/menu/f-pane.jpg" },
  { id: 16, nameAr: "دبابيس فراخ بالبقسماط", nameEn: "Breaded Chicken Drumsticks", category: "fryMeat", mode: "fry", price: 155, image: "images/menu/f-drumsticks.jpg" },
  { id: 17, nameAr: "شيش طاووق", nameEn: "Chicken Shish Tawook", category: "fryMeat", mode: "fry", sizeAr: "3 أسياخ", sizeEn: "3 skewers", price: 170, image: "images/menu/f-tawook.jpg" },

  // ===== جاهز للقلي - السندوتشات والمعجنات =====
  { id: 18, nameAr: "سمبوسك قريش", nameEn: "Cheese Sambousek", category: "snacks", mode: "fry", sizeAr: "400 جم", sizeEn: "400g", price: 75, image: "images/menu/f-s-cheese.jpg" },
  { id: 19, nameAr: "سمبوسك فراخ موتزاريلا", nameEn: "Chicken & Mozzarella Sambousek", category: "snacks", mode: "fry", sizeAr: "400 جم", sizeEn: "400g", price: 95, image: "images/menu/f-s-chicken.jpg" },
  { id: 20, nameAr: "سمبوسك لحمة", nameEn: "Meat Sambousek", category: "snacks", mode: "fry", sizeAr: "400 جم", sizeEn: "400g", price: 95, image: "images/menu/f-s-meat.jpg" },
  { id: 21, nameAr: "سمبوسك بسطرمة موتزاريلا", nameEn: "Basterma & Mozzarella Sambousek", category: "snacks", mode: "fry", price: 110, image: "images/menu/f-s-basterma.jpg" },
  { id: 22, nameAr: "سمبوسك خضار", nameEn: "Vegetable Sambousek", category: "snacks", mode: "fry", sizeAr: "400 جم", sizeEn: "400g", price: 75, image: "images/menu/f-s-veg.jpg" },
  { id: 23, nameAr: "سمبوسك موتزاريلا", nameEn: "Mozzarella Sambousek", category: "snacks", mode: "fry", sizeAr: "400 جم", sizeEn: "400g", price: 90, image: "images/menu/f-s-mozza.jpg" },
  { id: 24, nameAr: "كبيبة شامي", nameEn: "Shami Kibbeh", category: "snacks", mode: "fry", sizeAr: "8 قطع", sizeEn: "8 pcs", price: 170, image: "images/menu/f-kibbeh.jpg" }
];

// الأقسام: mode_heat و mode_fry فلاتر سريعة بتجمع أكتر من قسم
const categories = [
  { id: "all", ar: "الكل", en: "All" },
  { id: "mode_heat", ar: "جاهز للتسخين 🔥", en: "Ready to Heat" },
  { id: "mode_fry", ar: "جاهز للقلي 🍳", en: "Ready to Fry" },
  { id: "chicken", ar: "أطباق الفراخ 🐔", en: "Chicken Dishes" },
  { id: "meatHeat", ar: "أطباق اللحوم (تسخين) 🥩", en: "Meat Dishes (Heat)" },
  { id: "egyptian", ar: "أكلات مصرية 🥬", en: "Egyptian Classics" },
  { id: "fryMeat", ar: "أطباق اللحوم (قلي) 🍖", en: "Meat Dishes (Fry)" },
  { id: "snacks", ar: "السندوتشات والمعجنات 🥟", en: "Snacks & Pastries" }
];

const MODE_LABEL = {
  heat: { ar: "جاهز للتسخين", en: "Ready to Heat" },
  fry: { ar: "جاهز للقلي", en: "Ready to Fry" }
};

// صورة بديلة حسب القسم (بتظهر لو الصورة ما اتحملتش)
const CAT_EMOJI = {
  chicken: '🐔', meatHeat: '🥩', egyptian: '🥬', fryMeat: '🍖', snacks: '🥟'
};
function fallbackImg(cat) {
  const emoji = CAT_EMOJI[cat] || '🍽️';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170"><rect width="300" height="170" fill="#1a1a1a"/><text x="150" y="105" font-size="64" text-anchor="middle">' + emoji + '</text></svg>'
  );
}

// الوزن/العدد حسب اللغة
function itemSize(item) {
  return currentLang === 'ar' ? (item.sizeAr || '') : (item.sizeEn || '');
}

const translations = {
  ar: {
    brand_title: "كيتشورا",
    brand_subtitle: "جاهز على التسخين ودليفري 24 ساعة",
    cart: "السلة",
    hero_tag: "✨ تجربة طعام فريدة ومريحة",
    hero_title: "أكلك جاهز على التسخين أو القلي وبأعلى جودة",
    hero_desc: "أكل بيتي بطعم أصيل: وجبات جاهزة للتسخين من الفريزر للميكروويف، وسمبوسك ولحوم جاهزة للقلي مباشرة، وتوصيل سريع على مدار 24 ساعة!",
    delivery_24: "توصيل 24 ساعة",
    ready_heat: "جاهز على التسخين",
    premium_quality: "جودة إكسترا Premium",
    search_placeholder: "ابحث عن وجبة، سمبوسك، كفتة...",
    all_items: "جميع المنتجات",
    currency: "ج.م",
    shopping_cart: "سلة الطلبات",
    total: "الإجمالي:",
    name_placeholder: "الاسم بالكامل",
    address_placeholder: "العنوان التفصيلي للتوصيل",
    notes_placeholder: "أي ملاحظات إضافية على الطلب...",
    send_order_whatsapp: "إرسال الطلب عبر الواتساب",
    footer_tagline: "خدمة توصيل سريعة 24/7 - أكل بيتي ومصنعات بلمسة احترافية.",
    empty_cart: "السلة فارغة حالياً!",
    items_count: "صنف",
    no_results: "لا توجد نتائج مطابقة للبحث",
    added: "تمت الإضافة للسلة",
    need_items: "السلة فارغة، أضف منتجاً أولاً",
    need_info: "برجاء كتابة الاسم والعنوان للتوصيل"
  },
  en: {
    brand_title: "Kitchora",
    brand_subtitle: "Ready to Heat & 24/7 Delivery",
    cart: "Cart",
    hero_tag: "✨ Unique & Convenient Dining Experience",
    hero_title: "Home-Style Meals Ready to Heat or Fry",
    hero_desc: "Authentic home-style food: ready-to-heat meals straight from the freezer to the microwave, plus ready-to-fry sambousek and meats, with fast 24/7 delivery!",
    delivery_24: "24/7 Delivery",
    ready_heat: "Ready to Heat",
    premium_quality: "Premium Quality",
    search_placeholder: "Search for meals, sambousek, kofta...",
    all_items: "All Products",
    currency: "EGP",
    shopping_cart: "Shopping Cart",
    total: "Total:",
    name_placeholder: "Full Name",
    address_placeholder: "Detailed Delivery Address",
    notes_placeholder: "Any extra order notes...",
    send_order_whatsapp: "Send Order via WhatsApp",
    footer_tagline: "Fast 24/7 delivery service - Homemade taste with premium touch.",
    empty_cart: "Your cart is empty!",
    items_count: "items",
    no_results: "No matching results",
    added: "Added to cart",
    need_items: "Your cart is empty. Add an item first",
    need_info: "Please fill in your name and address"
  }
};

// ===== State Variables =====
let currentLang = 'ar';
let activeCategory = 'all';
let searchQuery = '';
let cart = [];

const WHATSAPP_NUMBER = '201020002397';

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const langToggleBtn = document.getElementById('langToggleBtn');
const langText = document.getElementById('langText');
const categoriesContainer = document.getElementById('categoriesContainer');
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');
const itemCountLabel = document.getElementById('itemCountLabel');

const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
const customerName = document.getElementById('customerName');
const customerAddress = document.getElementById('customerAddress');
const orderNotes = document.getElementById('orderNotes');
const toast = document.getElementById('toast');

// ===== Helpers =====
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// تطبيع النص العربي عشان البحث يلاقي "اسكالوب" و"إسكالوب" و"فراخ/فراخه" بنفس الطريقة
function normalize(str) {
  return String(str)
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .trim();
}

// نجهز نص البحث مرة واحدة (عربي + إنجليزي)
menuData.forEach(item => {
  item._search = normalize(`${item.nameAr} ${item.nameEn}`);
});

// الـ navbar ممكن يتغير ارتفاعه على الموبايل، فنحدّث موضع شريط البحث الثابت تلقائياً
function syncNavHeight() {
  document.documentElement.style.setProperty('--nav-h', `${navbar.offsetHeight}px`);
}

let toastTimer;
function showToast(message, type = 'ok') {
  toast.textContent = message;
  toast.className = `toast show ${type === 'error' ? 'error' : ''}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

// ===== Initialize App =====
function init() {
  syncNavHeight();
  if ('ResizeObserver' in window) {
    new ResizeObserver(syncNavHeight).observe(navbar);
  } else {
    window.addEventListener('resize', syncNavHeight);
  }

  renderCategories();
  updateCategoryTitle();
  renderMenu(true);
  updateCartUI();
  setupEventListeners();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ===== Render Category Filter Buttons =====
function renderCategories() {
  categoriesContainer.innerHTML = categories.map(cat => `
    <button class="cat-btn ${cat.id === activeCategory ? 'active' : ''}" data-id="${cat.id}">
      ${currentLang === 'ar' ? cat.ar : cat.en}
    </button>
  `).join('');
}

function updateCategoryTitle() {
  if (activeCategory === 'all') {
    currentCategoryTitle.textContent = translations[currentLang].all_items;
  } else {
    currentCategoryTitle.textContent = getCategoryName(activeCategory);
  }
}

function getCategoryName(catId) {
  const c = categories.find(cat => cat.id === catId);
  return c ? (currentLang === 'ar' ? c.ar : c.en) : '';
}

// ===== Render Menu Cards =====
// animate = true بس عند أول تحميل أو تغيير القسم أو اللغة، مش مع كل حرف في البحث
function renderMenu(animate = false) {
  const q = normalize(searchQuery);
  const filtered = menuData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory || activeCategory === `mode_${item.mode}`;
    return matchesCategory && (!q || item._search.includes(q));
  });

  const t = translations[currentLang];
  itemCountLabel.textContent = `${filtered.length} ${t.items_count}`;
  menuGrid.classList.toggle('is-animated', animate);

  if (filtered.length === 0) {
    menuGrid.innerHTML = `<div class="no-results">${t.no_results}</div>`;
    return;
  }

  menuGrid.innerHTML = filtered.map((item, i) => {
    const name = currentLang === 'ar' ? item.nameAr : item.nameEn;
    return `
    <div class="menu-card" id="card-${item.id}" style="--i:${Math.min(i, 12)}">
      <div class="card-img-wrapper">
        <img src="${item.image || fallbackImg(item.category)}" data-cat="${item.category}" alt="${name}" class="card-img" id="img-${item.id}" width="300" height="170"
             loading="${i < 4 ? 'eager' : 'lazy'}" decoding="async" referrerpolicy="no-referrer">
        <span class="card-badge mode-${item.mode}">${MODE_LABEL[item.mode][currentLang]}</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <span class="card-category">${getCategoryName(item.category)}</span>
        ${itemSize(item) ? `<span class="card-size">${itemSize(item)}</span>` : ''}
        <div class="card-footer">
          <span class="card-price">${item.price} ${t.currency}</span>
          <button class="add-to-cart-btn" data-id="${item.id}" aria-label="${currentLang === 'ar' ? 'أضف للسلة' : 'Add to cart'}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ===== Cart Logic =====
function addToCart(id, fromEl) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  flyToCart(id, fromEl);
  updateCartUI();
}

function bumpCart() {
  cartBtn.classList.remove('cart-bump');
  void cartBtn.offsetWidth; // إعادة تشغيل الأنيميشن لو الضغط متكرر
  cartBtn.classList.add('cart-bump');
}

// أنيميشن الطيران للسلة: بيستخدم transform بس (أسرع بكتير من تحريك left/top)
function flyToCart(id, fromEl) {
  const imgElement = document.getElementById(`img-${id}`);

  if (reducedMotion() || !imgElement || !fromEl || !fromEl.animate) {
    bumpCart();
    if (reducedMotion()) showToast(translations[currentLang].added);
    return;
  }

  const size = 56;
  const from = fromEl.getBoundingClientRect();
  const to = cartBtn.getBoundingClientRect();
  const startX = from.left + from.width / 2;
  const startY = from.top + from.height / 2;
  const dx = (to.left + to.width / 2) - startX;
  const dy = (to.top + to.height / 2) - startY;

  const flyer = document.createElement('img');
  flyer.src = imgElement.currentSrc || imgElement.src;
  flyer.className = 'flying-img';
  flyer.alt = '';
  flyer.referrerPolicy = 'no-referrer';
  flyer.style.left = `${startX - size / 2}px`;
  flyer.style.top = `${startY - size / 2}px`;
  document.body.appendChild(flyer);

  const anim = flyer.animate([
    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 36}px) scale(0.75)`, opacity: 1, offset: 0.5 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.2)`, opacity: 0.4 }
  ], { duration: 520, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });

  anim.onfinish = () => {
    flyer.remove();
    bumpCart();
  };
}

function updateCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const t = translations[currentLang];
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const prevCount = Number(cartCount.textContent) || 0;
  cartCount.textContent = totalCount;
  if (totalCount !== prevCount) {
    cartCount.classList.remove('pop');
    void cartCount.offsetWidth;
    cartCount.classList.add('pop');
  }
  cartTotalAmount.textContent = `${totalPrice} ${t.currency}`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="empty-cart-msg">${t.empty_cart}</div>`;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="item-info">
        <h5>${currentLang === 'ar' ? item.nameAr : item.nameEn}${itemSize(item) ? ` <small class="cart-size">(${itemSize(item)})</small>` : ''}</h5>
        <span class="item-price">${item.price * item.qty} ${t.currency}</span>
      </div>
      <div class="item-controls">
        <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="-">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="+">+</button>
      </div>
      <button class="remove-item-btn" data-action="remove" data-id="${item.id}" aria-label="${currentLang === 'ar' ? 'إزالة الصنف' : 'Remove item'}">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
}

// ===== Cart Drawer =====
function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  cartDrawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

// ===== Language =====
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', currentLang === 'en');
  langText.textContent = currentLang === 'ar' ? 'English' : 'عربي';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = translations[currentLang][el.getAttribute('data-i18n')];
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const text = translations[currentLang][el.getAttribute('data-i18n-placeholder')];
    if (text) el.placeholder = text;
  });

  renderCategories();
  updateCategoryTitle();
  renderMenu(false);
  updateCartUI();
  syncNavHeight();
}

// ===== Event Listeners =====
function setupEventListeners() {
  // Search (مع debounce عشان ما يعيدش رسم الكروت مع كل حرف)
  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    const value = e.target.value;
    searchTimer = setTimeout(() => {
      searchQuery = value;
      renderMenu(false);
    }, 150);
  });

  // Categories (event delegation)
  categoriesContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    activeCategory = btn.dataset.id;
    categoriesContainer.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b === btn));
    btn.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
    updateCategoryTitle();
    renderMenu(true);
  });

  // Add to cart (event delegation)
  menuGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;
    addToCart(Number(btn.dataset.id), btn);
  });

  // لو صورة منتج ما اتحملتش نحط صورة بديلة بدل الأيقونة المكسورة
  menuGrid.addEventListener('error', (e) => {
    const img = e.target;
    if (img.tagName === 'IMG' && !img.dataset.fallback) {
      img.dataset.fallback = '1';
      img.src = fallbackImg(img.dataset.cat);
    }
  }, true);

  // Cart items controls (event delegation)
  cartItemsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.dataset.action === 'inc') updateCartQty(id, 1);
    if (btn.dataset.action === 'dec') updateCartQty(id, -1);
    if (btn.dataset.action === 'remove') removeFromCart(id);
  });

  // Toggle Language
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
  });

  // Cart Drawer Events
  cartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });

  // شيل علامة الخطأ أول ما المستخدم يكتب
  [customerName, customerAddress].forEach(input => {
    input.addEventListener('input', () => input.classList.remove('invalid'));
  });

  // Send Order via WhatsApp
  sendWhatsappBtn.addEventListener('click', () => {
    const t = translations[currentLang];

    if (cart.length === 0) {
      showToast(t.need_items, 'error');
      return;
    }

    let firstInvalid = null;
    [customerName, customerAddress].forEach(input => {
      const empty = !input.value.trim();
      input.classList.remove('invalid');
      if (empty) {
        void input.offsetWidth;
        input.classList.add('invalid');
        if (!firstInvalid) firstInvalid = input;
      }
    });

    if (firstInvalid) {
      showToast(t.need_info, 'error');
      firstInvalid.focus();
      return;
    }

    const name = customerName.value.trim();
    const address = customerAddress.value.trim();
    const notes = orderNotes.value.trim();

    let orderText = `*طلب جديد من موقع كيتشورا 🍽️*\n\n`;
    orderText += `👤 *الاسم:* ${name}\n`;
    orderText += `📍 *العنوان:* ${address}\n`;
    if (notes) orderText += `📝 *ملاحظات:* ${notes}\n`;
    orderText += `--------------------------------\n`;
    orderText += `*الطلبات:*\n`;

    let total = 0;
    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      orderText += `▪️ ${item.nameAr}${item.sizeAr ? ' (' + item.sizeAr + ')' : ''} (x${item.qty}) - ${itemTotal} ج.م\n`;
    });

    orderText += `--------------------------------\n`;
    orderText += `💰 *الإجمالي النهائي:* ${total} ج.م\n`;
    orderText += `🚚 *الخدمة:* توصيل دليفري 24 ساعة`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
  });
}
