// ── EMAILJS CONFIG ──
// Replace these three values after setting up your EmailJS account:
const EMAILJS_SERVICE_ID  = 'service_wpgkerj';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_izwj8fw';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'oX6cyBihfknV4kDAi';    // e.g. 'abcXYZ123...'

// ── SECTION LOADER ──
function loadSection(id, file) {
  fetch('sections/' + file)
    .then(res => {
      if (!res.ok) throw new Error('Could not load ' + file);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
      document.getElementById(id).querySelectorAll('script').forEach(orig => {
        const s = document.createElement('script');
        s.textContent = orig.textContent;
        document.body.appendChild(s);
      });
      document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
        el.classList.add('observed');
        window._observer && window._observer.observe(el);
      });
    })
    .catch(err => console.warn(err));
}

// ── SCROLL REVEAL ──
window._observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      window._observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

// ── NAV SCROLL SHRINK ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (!nav) return;
  nav.style.padding = window.scrollY > 60 ? '10px 48px' : '16px 48px';
});

// ── QUICK ORDER (called from product cards) ──
function quickOrder(name) {
  const select = document.getElementById('orderItem');
  if (select) select.value = name;
  const target = document.querySelector('#contact');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

// ── ORDER FORM SUBMIT ──
function placeOrder() {
  const name    = (document.getElementById('orderName')    || {}).value?.trim();
  const phone   = (document.getElementById('orderPhone')   || {}).value?.trim();
  const item    = (document.getElementById('orderItem')    || {}).value;
  const address = (document.getElementById('orderAddress') || {}).value?.trim();
  const note    = (document.getElementById('orderNote')    || {}).value?.trim();

  if (!name || !phone || !item || !address) {
    alert('Please fill in your name, phone number, sweet selection, and delivery address.');
    return;
  }

  // Disable button to prevent double submit
  const btn = document.querySelector('.form-submit');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

  // Send email via EmailJS
  emailjs.init(EMAILJS_PUBLIC_KEY);
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    customer_name:  name,
    customer_phone: phone,
    sweet_item:     item,
    address:        address,
    special_note:   note || 'None',
    to_email:       'atharava0910@gmail.com'
  })
  .then(() => {
    // Show success toast
    const toast = document.getElementById('toast');
    if (toast) {
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 5000);
    }
    // Reset form
    ['orderName', 'orderPhone', 'orderAddress', 'orderNote'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    const sel = document.getElementById('orderItem');
    if (sel) sel.value = '';
  })
  .catch(err => {
    console.error('EmailJS error:', err);
    alert('Sorry, something went wrong. Please call us directly at +91 88302 49239.');
  })
  .finally(() => {
    if (btn) { btn.disabled = false; btn.textContent = 'Send Order Request 🎁'; }
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  loadSection('header',   'header.html');
  loadSection('about',    'about.html');
  loadSection('products', 'products.html');
  loadSection('contact',  'contact.html');
});
