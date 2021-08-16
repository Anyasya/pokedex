const btnBurger = document.querySelector('.menu-icon');
const navHeader = document.querySelector('.header__body');
const spanBurger = document.querySelectorAll('.span-burger');
const mainContent = document.querySelector('.main-content');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

btnBurger.onclick = function() {
    navHeader.classList.toggle('header-body-show');
    for (var i = 0; i < spanBurger.length; i++) {
        spanBurger[i].classList.toggle('span-burger-active');
    }
    mainContent.classList.toggle('shadow-page');
};