/* Assignment 4: navigation toggle and contact form validation */
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

// Nav toggle for mobile
function initNav() {
  qsa('.nav-toggle').forEach(btn => {
    const nav = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      if (!nav) return;
      nav.style.display = (nav.style.display === 'flex' || nav.style.display === 'block') ? 'none' : 'block';
    });
  });
}

// Simple form validation used on contact page
function initContactForm() {
  const form = qs('#contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const fullname = qs('#fullname') || qs('#name');
    const email = qs('#email');
    const message = qs('#message');
    // fullname
    if (fullname && fullname.value.trim().length < 2) { showError(fullname, 'Please enter your name'); valid = false; } else clearError(fullname);
    // email basic check
    if (email && (!email.value.includes('@') || email.value.trim().length < 5)) { showError(email, 'Please enter a valid email'); valid = false; } else clearError(email);
    // message
    if (message && message.value.trim().length < 10) { showError(message, 'Message must be at least 10 characters'); valid = false; } else clearError(message);

    const status = qs('#formStatus');
    if (!valid) { if (status) status.textContent = 'Please fix the errors above.'; return; }
    if (status) { status.textContent = 'Message sent (demo). Thank you!'; status.style.color = '#10b981'; }
    form.reset();
  });
}

function showError(field, message) {
  if (!field) return;
  const el = qs(`.error[data-for="${field.id}"]`);
  if (el) el.textContent = message; else {
    const s = document.createElement('small'); s.className='error'; s.textContent = message; field.after(s);
  }
}
function clearError(field){ if (!field) return; const el = qs(`.error[data-for="${field.id}"]`); if (el) el.textContent = ''; }

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initContactForm();
  // set year elements
  qsa('#year,#year2,#year3,#year4').forEach(el => el.textContent = new Date().getFullYear());
});
