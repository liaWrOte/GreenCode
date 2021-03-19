import stickyMenu from "./stickyMenu.js";
import funnyQuote from "./funnyQuote.js";
import hamburgerMenu from "./hamburgerMenu.js";

let conditionalLoading = {
    init: function () {
        
        // loadings for desktop resolution
       if (window.innerWidth >= 1034) {
        stickyMenu.init(); // shadow menu on scroll
        funnyQuote.init(); // funny quote appear on download action
       } 

       // loadings for tablet and smartphone resolutions
       if (window.innerWidth < 1034) {
        hamburgerMenu.init(); // mobile menu behavior
        funnyQuote.init(); // funny quote appear on download action
       }     
    }
}

 document.addEventListener("DOMContentLoaded", conditionalLoading.init);