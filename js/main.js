const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

const switcher = document.querySelectorAll(".switcher__title");
switcher.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("selected");
    })
);

const faq = document.querySelectorAll(".q");
faq.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("selected-question");
    })
);

