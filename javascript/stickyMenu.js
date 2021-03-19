
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
            stickyMenu.nav.classList.add("banner-active");
        } 
        if (stickyMenu.offsetY < stickyMenu.nav.offsetHeight) {
            stickyMenu.nav.classList.remove("banner-active");
        }
    },
};

document.addEventListener('DOMContentLoaded', stickyMenu.init);