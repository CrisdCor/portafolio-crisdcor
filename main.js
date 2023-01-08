const menuMobile = document.querySelector(".mobile-menu");
const iconMobileMenu = document.querySelector(".mobile-icon-nav-container");
const iconCloseMobileMenu = document.querySelector(".close-icon-container");



iconMobileMenu.addEventListener("click", openMobileMenu);
iconCloseMobileMenu.addEventListener("click", closeMobileMenu);



function openMobileMenu() {
    menuMobile.classList.remove("inactive");
}


function closeMobileMenu() {
    menuMobile.classList.add("inactive");
}