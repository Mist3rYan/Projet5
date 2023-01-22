const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
burger.addEventListener('click', () => {
    burger.classList.toggle('mobileMenu');
    navLinks.classList.toggle('mobileMenu');
});
