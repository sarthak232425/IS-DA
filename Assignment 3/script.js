// Utility helpers
const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Dark mode
function initDarkMode() {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') document.body.classList.add('dark');
  qs('#themeToggle').addEventListener('click', toggleDarkMode);
}
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
}

// Contact form validation
function showError(field, message) {
  const el = qs(`.error[data-for="${field.id}"]`);
  if (el) el.textContent = message;
}
function clearError(field) {
  const el = qs(`.error[data-for="${field.id}"]`);
  if (el) el.textContent = '';
}
function validateForm(e) {
  e.preventDefault();
  const name = qs('#name');
  const email = qs('#email');
  const message = qs('#message');
  let valid = true;
  // Name
  if (name.value.trim().length < 2) { showError(name, 'Enter your name'); valid = false; } else clearError(name);
  // Email basic check
  if (!email.value.includes('@') || email.value.trim().length < 5) { showError(email, 'Enter a valid email'); valid = false; } else clearError(email);
  // Message length
  if (message.value.trim().length < 10) { showError(message, 'Message must be at least 10 characters'); valid = false; } else clearError(message);

  const status = qs('#formStatus');
  if (!valid) { status.textContent = 'Please fix errors above.'; status.style.color = '#dc2626'; return; }
  status.textContent = 'Message sent (demo) — thank you!'; status.style.color = '#10b981';
  e.target.reset();
}

// To-do list (localStorage)
const TODO_KEY = 'assignment3_todos';
function loadTodos() { try { return JSON.parse(localStorage.getItem(TODO_KEY)) || []; } catch { return []; } }
function saveTodos(todos) { localStorage.setItem(TODO_KEY, JSON.stringify(todos)); }
function renderTodos() {
  const list = qs('#todoList'); list.innerHTML = '';
  const todos = loadTodos();
  todos.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = t;
    const btn = document.createElement('button'); btn.textContent = 'Remove';
    btn.addEventListener('click', () => { todos.splice(i,1); saveTodos(todos); renderTodos(); });
    li.appendChild(btn); list.appendChild(li);
  });
}
function initTodo() {
  const input = qs('#todoInput');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const v = input.value.trim(); if (!v) return;
      const todos = loadTodos(); todos.push(v); saveTodos(todos); input.value = ''; renderTodos();
    }
  });
  renderTodos();
}

// Simple slider
function initSlider() {
  const slidesHolder = qs('#slides');
  const imgs = qsa('#slides img');
  let idx = 0;
  function show(i) { imgs.forEach((im, j) => im.style.display = (j === i) ? 'block' : 'none'); }
  show(idx);
  qs('#prev').addEventListener('click', () => { idx = (idx - 1 + imgs.length) % imgs.length; show(idx); });
  qs('#next').addEventListener('click', () => { idx = (idx + 1) % imgs.length; show(idx); });
  // Auto-advance
  setInterval(() => { idx = (idx + 1) % imgs.length; show(idx); }, 5000);
}

// Show/hide toggles
function initToggles() {
  qsa('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (!target) return;
      target.hidden = !target.hidden;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  qs('#contactForm').addEventListener('submit', validateForm);
  initDarkMode();
  initTodo();
  initSlider();
  initToggles();
  qs('#year').textContent = new Date().getFullYear();
});
