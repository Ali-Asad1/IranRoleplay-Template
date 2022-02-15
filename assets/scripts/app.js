let $ = document;

const menuBtn = $.querySelector('.menu-btn');
const sideMenu = $.querySelector('.side-menu')

function sideMenuOpening(){
    sideMenu.classList.toggle('active')
}




menuBtn.addEventListener('click', sideMenuOpening)