var menu = document.getElementsByClassName("menu")[0];
var iconMenu = document.getElementById("iconMenu");

iconMenu.addEventListener("click", function () {

    menu.style.visibility = "visible";

    menu.style.animation = "menu .5s cubic-bezier(.25,.46,.45,.94) both"
}) 