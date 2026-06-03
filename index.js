// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 80);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', window.location.pathname);
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

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    container.classList.remove('open');
  });
});
