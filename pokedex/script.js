const btnBurger = document.querySelector('.menu-icon');
const navHeader = document.querySelector('.menu-list');
const spanBurger = document.querySelectorAll('.span-burger');
const mainContent = document.querySelector('.main-content');

btnBurger.onclick = function() {
    navHeader.classList.toggle('header-body-show');
    for (var i = 0; i < spanBurger.length; i++) {
        spanBurger[i].classList.toggle('span-burger-active');
    }
    mainContent.classList.toggle('shadow-page');
};