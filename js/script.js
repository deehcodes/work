var styleSwitcher = document.querySelector(".style-switcher-toggler");
var styleSwitcherToggle = document.querySelector(".colors");
var link = document.querySelector(".colors-span");

styleSwitcherToggle.addEventListener("click", function(){
    this.classList.toggle("click");
    colors.classList.toggle("open");
});