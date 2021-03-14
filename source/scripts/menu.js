let navbar = document.querySelector(".nav");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let menuButtons = document.querySelectorAll(".menuButton");

hamburgerMenu.addEventListener("click", toggleMenu);

/**
 * Toggles the hamburger menu to show or hide
 * the navigation menu.
 */
function toggleMenu() {
    navbar.classList.toggle("showNav");
    hamburgerMenu.classList.toggle("showClose");
};

menuButtons.forEach(
    menuButton => {
        menuButton.addEventListener("click", toggleMenu);
});

let aboutPage = document.getElementById("aboutPage");

function displayAbout() {
    aboutPage.style.display = "block";
    overlay.style.display = "block";
}

function aboutClose() {
    aboutPage.style.display = "none";
    overlay.style.display = "none";
}

let howToPage = document.getElementById("howTo");

function displayHowTo() {
    howToPage.style.display = "block";
    overlay.style.display = "block";
}

function howToClose() {
    howToPage.style.display = "none";
    overlay.style.display = "none";
}