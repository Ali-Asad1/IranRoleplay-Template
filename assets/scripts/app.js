let $ = document;

const menuBtn = $.querySelector('.menu-btn');
const sideMenu = $.querySelector('.side-menu');
const sideMenuOverlay = $.querySelector('.side-menu-overlay');
const closeBtn = $.querySelector('.close-button');
const darkModeBtn = $.querySelector('.dark-icon');

function sideMenuOpening() {
    sideMenu.classList.add('active');
    sideMenuOverlay.classList.add('active');

}

function sideMenuClosing() {
    sideMenu.classList.remove('active');
    sideMenuOverlay.classList.remove('active');
}

function darkMode() {
    $.body.classList.toggle('dark');
}


menuBtn.addEventListener('click', sideMenuOpening);
sideMenuOverlay.addEventListener('click', sideMenuClosing);
closeBtn.addEventListener('click', sideMenuClosing);
darkModeBtn.addEventListener('click', darkMode);