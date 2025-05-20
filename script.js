window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-float').forEach(el => {
        el.style.opacity = '1';
    });
});

const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('show');
});

    


