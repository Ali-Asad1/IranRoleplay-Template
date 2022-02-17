let $ = document;

const menuBtn = $.querySelector('.menu-btn');
const sideMenu = $.querySelector('.side-menu');
const sideMenuOverlay = $.querySelector('.side-menu-overlay');
const closeBtn = $.querySelector('.close-button');

function sideMenuOpening(){
    sideMenu.classList.add('active');
    sideMenuOverlay.classList.add('active');

}

function sideMenuClosing (){
    sideMenu.classList.remove('active');
    sideMenuOverlay.classList.remove('active');
}



menuBtn.addEventListener('click', sideMenuOpening);
sideMenuOverlay.addEventListener('click', sideMenuClosing);
closeBtn.addEventListener('click', sideMenuClosing);