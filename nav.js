document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.mobile-menu');
  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });


});