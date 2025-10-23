// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger menu toggle
const toggle = document.getElementById('menu-toggle');
const container = document.getElementById('menu-container');

toggle.addEventListener('click', () => {
  container.classList.toggle('open');
});