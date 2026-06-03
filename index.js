// Dark mode — toggle between dark and light
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  html.classList.toggle('dark', theme === 'dark');
}

const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);

themeToggle.addEventListener('click', () => {
  const next = html.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 80);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hamburger menu toggle
const toggle = document.getElementById('menu-toggle');
const container = document.getElementById('menu-container');

toggle.addEventListener('click', () => {
  container.classList.toggle('open');
});
