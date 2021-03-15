let navbar = document.querySelector(".nav");
let hamburgerMenu = document.querySelector(".hamburgerMenu");
let menuButtons = document.querySelectorAll(".menuButton");

if(document.querySelector(".hamburgerMenu") != null) {
    hamburgerMenu.addEventListener("click", toggleMenu);
}

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

/**
 * Displays the about page in the menu.
 */
function displayAbout() {
    if(document.getElementById("aboutPage") != null && document.getElementById("overlay") != null){
        document.getElementById("aboutPage").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
}

/**
 * Closes the about page.
 */
function aboutClose() {
    aboutPage.style.display = "none";
    overlay.style.display = "none";
}

let howToPage = document.getElementById("howTo");

/**
 * Displays the tutorial page.
 */
function displayHowTo() {
    howToPage.style.display = "block";
    overlay.style.display = "block";
}

/**
 * Closes the tutorial page.
 */
function howToClose() {
    howToPage.style.display = "none";
    overlay.style.display = "none";
}

module.exports = {displayAbout};