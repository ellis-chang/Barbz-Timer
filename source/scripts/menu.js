let hamburgerMenu = document.querySelector('.hamburgerMenu');
let menuButtons = document.querySelectorAll('.menuButton');

/*========================================================================
 * Menu Implementation
 *========================================================================*/

if (document.querySelector('.hamburgerMenu') != null) {
  hamburgerMenu.addEventListener('click', toggleMenu);
}

/**
 * Toggles the hamburger menu to show or hide
 * the navigation menu.
 */
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('showNav');
  document.querySelector('.hamburgerMenu').classList.toggle('showClose');
}

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener('click', toggleMenu);
});

/**
 * Displays the about page in the menu.
 */
function displayAbout() {
  document.getElementById('aboutPage').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

/**
 * Closes the about page.
 */
function aboutClose() {
  document.getElementById('aboutPage').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

/**
 * Displays the tutorial page.
 */
function displayHowTo() {
  document.getElementById('howTo').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

/**
 * Closes the tutorial page.
 */
function howToClose() {
  document.getElementById('howTo').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

/*========================================================================
 * Modules
 *========================================================================*/

if (typeof exports !== 'undefined') {
  module.exports = {
    toggleMenu,
    displayAbout,
    aboutClose,
    displayHowTo,
    howToClose,
  };
}
