const btnBurger = document.querySelector('.menu-icon');
const navHeader = document.querySelector('.header-body');
const spanBurger = document.querySelectorAll('.span-burger');

btnBurger.onclick = function() {
    navHeader.classList.toggle('header-body-show');
    for (var i = 0; i < spanBurger.length; i++) {
        spanBurger[i].classList.toggle('span-burger-active');
    }
};