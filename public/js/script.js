const burger = document.querySelector('.burger');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    body.classList.toggle('active');
    burger.classList.toggle('active');
});