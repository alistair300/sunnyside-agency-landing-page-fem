const nav = document.querySelector('nav');
const toggle = document.querySelector('.hero__toggle');

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});