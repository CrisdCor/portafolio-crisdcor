const menuOpen = document.querySelector('.btn-menu');
const mobileMenu = document.querySelector('.global-menu');
const mobileListMenu = document.querySelector('.global-menu-list');

menuOpen.addEventListener('click', () => {
    if (menuOpen.classList.contains('hamb-menu-open')) {
        menuOpen.classList.remove('hamb-menu-open');
        mobileMenu.classList.add('global-menu-inactive');
        mobileListMenu.classList.add('list-hidden');
    } else {
        menuOpen.classList.add('hamb-menu-open');
        mobileMenu.classList.remove('global-menu-inactive');
        mobileListMenu.classList.remove('list-hidden');
    }
})