
/* SELECTORS */

let openMenuButton = document.querySelector(".js-navbar__menu__open");
let closeMenuButton = document.querySelector(".js-navbar__menu__close");


/* FUNCTIONS */

function openMenu() {
    openMenuButton.setAttribute("aria-expanded", "true")
}

function closeMenu() {
    openMenuButton.setAttribute("aria-expanded", "false")
}

/* EVENT LISTENERS */

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);