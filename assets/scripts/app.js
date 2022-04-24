let $ = document;

const menuBtn = $.querySelector('.menu-btn');
const sideMenu = $.querySelector('.side-menu');
const sideMenuOverlay = $.querySelector('.side-menu-overlay');
const closeBtn = $.querySelector('.close-button');
const darkModeBtn = $.querySelector('.dark-icon');
const progressBar = $.querySelector('.progress-bar');

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

window.onscroll = function headerProgressBar() {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    progressBar.style.width = scrolled + "%";
    console.log(scroll);
}

menuBtn.addEventListener('click', sideMenuOpening);
sideMenuOverlay.addEventListener('click', sideMenuClosing);
closeBtn.addEventListener('click', sideMenuClosing);
darkModeBtn.addEventListener('click', darkMode);