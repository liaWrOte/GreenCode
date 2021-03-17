
let stickyMenu = {

    init: function () {
        stickyMenu.nav = document.getElementById("banner");
        if (window.innerWidth > "1034") {
            window.addEventListener("scroll", stickyMenu.sticky);
        }    
    },

    sticky: function () {
        stickyMenu.topPosition = stickyMenu.nav.offsetTop;
        stickyMenu.offsetY = this.pageYOffset;

        if ((stickyMenu.topPosition - stickyMenu.offsetY) < 1) {
            stickyMenu.nav.style.boxShadow = "2px 7px 19px -5px rgba(0,0,0,0.21)";
            stickyMenu.nav.style.webkitBoxShadow = "2px 7px 19px -5px rgba(0,0,0,0.21)";
            stickyMenu.nav.style.mozBoxShadow = "2px 7px 19px -5px rgba(0,0,0,0.21)";
        } 
        if (stickyMenu.offsetY < stickyMenu.nav.offsetHeight) {
            stickyMenu.nav.style.boxShadow = "none";
            stickyMenu.nav.style.webkitBoxShadow = "none";
            stickyMenu.nav.style.mozBoxShadow = "none";
        }
    },
};

document.addEventListener('DOMContentLoaded', stickyMenu.init);