// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-to-top button (visible after scrolling past the header height)
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 80);
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname);
  });
}

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

if (toggle && container) {
  toggle.addEventListener('click', () => {
    container.classList.toggle('open');
  });

  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      container.classList.remove('open');
    });
  });
}

// Interest card carousels
document.querySelectorAll('[data-carousel]').forEach(card => {
  const images = card.querySelectorAll('.carousel-track img');
  const dots = card.querySelectorAll('.carousel-dot');
  let index = 0;
  let timer;

  function show(i) {
    images[index].classList.remove('active');
    dots[index].classList.remove('active');
    index = (i + images.length) % images.length;
    images[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function next() { show(index + 1); }
  function start() { timer = setInterval(next, 4000); }
  function stop() { clearInterval(timer); }

  card.querySelector('.carousel-next').addEventListener('click', () => { show(index + 1); stop(); start(); });
  card.querySelector('.carousel-prev').addEventListener('click', () => { show(index - 1); stop(); start(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); stop(); start(); }));

  card.addEventListener('mouseenter', stop);
  card.addEventListener('mouseleave', start);

  if (images.length > 1) start();
});
