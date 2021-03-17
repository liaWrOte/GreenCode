
let howItWorksEffect = {

    arrow : document.getElementsByClassName("see-more-arrow"),

    init: function () {
        howItWorksEffect.hoveredLine = document.getElementsByClassName("see-more");
        
        for (let i = 0; i < howItWorksEffect.hoveredLine.length; i++) {
            howItWorksEffect.hoveredLine[i].addEventListener("mouseover", howItWorksEffect.hoverEffect);
            howItWorksEffect.hoveredLine[i].addEventListener("mouseout", howItWorksEffect.leaveHoverEffect);
        }
    },

    hoverEffect: function () {
        for (let i = 0; i < howItWorksEffect.arrow.length; i++) {
            howItWorksEffect.arrow[i].classList.add("see-more-arrow-translate");
        }
    },

    leaveHoverEffect: function () {
        for (let i = 0; i < howItWorksEffect.arrow.length; i++) {
            howItWorksEffect.arrow[i].classList.remove("see-more-arrow-translate");
        }
    },
};

document.addEventListener('DOMContentLoaded', howItWorksEffect.init);