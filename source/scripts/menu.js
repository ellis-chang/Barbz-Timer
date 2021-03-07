let navbar = document.querySelector(".nav");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let menuButtons = document.querySelectorAll(".menuButton");

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    navbar.classList.toggle("showNav");
    hamburgerMenu.classList.toggle("showClose");
};

menuButtons.forEach(
    menuButton => {
        menuButton.addEventListener("click", toggleMenu);
});
