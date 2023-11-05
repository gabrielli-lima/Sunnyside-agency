let isOpen = false;
let menuContainer = document.querySelector(".menuContainer");
let iconMenu = document.getElementById("iconMenu");

iconMenu.addEventListener("click", modalMenu);

function modalMenu() {
    if (!isOpen) {
        menuContainer.style.visibility = "visible";
        menuContainer.style.animation = "menu-open .5s cubic-bezier(.25,.46,.45,.94) both";
        isOpen = true;
    } else {
        menuContainer.style.visibility = "hidden";
        menuContainer.style.animation = "menu-close .5s cubic-bezier(.25,.46,.45,.94) both";
        isOpen = false;
    }
}