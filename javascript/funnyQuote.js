
let funnyQuote = {

    init: function () {
        funnyQuote.item = document.querySelector(".funny-quote");
        funnyQuote.triggers = document.getElementsByClassName("quote-trigger");

        for (let i = 0; i < funnyQuote.triggers.length; i++) {
            funnyQuote.triggers[i].addEventListener("click",funnyQuote.showQuote);
        };
    },

    showQuote: function () {
        funnyQuote.item.classList.add("funny-quote-show");

        setTimeout( () => {
            funnyQuote.item.classList.remove("funny-quote-show");
        }, 3500);
    }

};

export default funnyQuote ;