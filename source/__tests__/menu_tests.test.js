//const toggleMenu = require('../scripts/menu');
const {displayAbout} = require('../scripts/menu');
//const aboutClose = require('../scripts/menu');
//const {displayHowTo} = require('../scripts/menu');
//const howToClose = require('../scripts/menu');

describe('About page is ', () => {
    document.body.innerHTML = '<div id="aboutPage" style="display: none;"></div> <div id="overlay" style="display: none;"></div>';

    test('display', () => {
        let aboutPage = document.getElementById("aboutPage");
        let overlay = document.getElementById("overlay");
        displayAbout();
        expect(aboutPage.style.display).toEqual("block");
        expect(overlay.style.display).toEqual("block");
    })
})
/*
describe('How To page is ', () => {
    document.body.innerHTML = '<div id="aboutPage"></div> <div id="overlay"></div>';

    test('display', () => {
        let aboutPage = document.getElementById("aboutPage");
        let overlay = document.getElementById("overlay");
        displayHowTo();
        expect(aboutPage.style.display).toEqual("");
        expect(overlay.style.display).toEqual("");
    })
})*/

