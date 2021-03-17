
let hamburgerMenu = {

    init: function () {
        // selectors for open/close mobile menu
        hamburgerMenu.nav = document.querySelector("nav");
        hamburgerMenu.icon = document.getElementById("hamburger-icon");

        // selectors for nav items links
        hamburgerMenu.navItems = document.getElementsByClassName("nav-item");


        // call for open/close menu
        hamburgerMenu.icon.addEventListener("click", hamburgerMenu.toggleNav);

        // call for close menu on links click
        for (let i = 0; i < hamburgerMenu.navItems.length; i++) {
            hamburgerMenu.navItems[i].addEventListener("click", hamburgerMenu.closeNav);
        }
    },

    toggleNav: function () {
        hamburgerMenu.nav.classList.toggle("active");
        hamburgerMenu.icon.classList.toggle("menu-open");
    },

    closeNav:function () {
        hamburgerMenu.nav.classList.remove("active");
    }
};

document.addEventListener('DOMContentLoaded', hamburgerMenu.init);