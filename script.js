// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn i');
const menu = document.querySelector('.menu');
const cancelBtn = document.querySelector('.cancel-btn i');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
