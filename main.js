const menuMobile = document.querySelector(".mobile-menu");

const iconMobileMenu = document.querySelector(".mobile-icon-nav-container");
const iconCloseMobileMenu = document.querySelector(".close-icon-container");
const btnContact = document.getElementsByTagName('a')[3];


iconMobileMenu.addEventListener("click", openMobileMenu);
iconCloseMobileMenu.addEventListener("click", closeMobileMenu);



function openMobileMenu() {
    setTimeout(function(){
        menuMobile.classList.remove("inactive");
    },350);
}



function closeMobileMenu() {
    menuMobile.classList.add("inactive");
}