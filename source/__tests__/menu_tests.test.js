const {toggleMenu, displayAbout, aboutClose, displayHowTo, howToClose} = require('../scripts/menu');

document.body.innerHTML = `
    <button class="hamburgerMenu"></button>
    <div>
        <nav class="nav">
        </nav>
    </div>
    <div id="aboutPage" style="display: none;"></div>
    <div id="howTo" style="display: none;"></div>
    <div id="overlay" style="display: none;"></div>

    <style>
    .hamburgerMenu {
        position: absolute;
        z-index: 1000;
        top: 2vh;
        right: 1.5vw;
        width: 3vw;
        height: 5.5vh;
        border: 1px solid #582323;
        border-radius: 1vh;
        cursor: pointer;
        background-color: #F6D2D5;
        background-image: url("../images/hamburger-menu.png");
        background-size: 100%;
        outline: none;
    }

    .showNav {
        transform: translateY(35%);
    }

    .nav {
        position: absolute;
        z-index: 1000;
        top: 0px;
        right: 2vw;
        background-color: #F49FB7;
        width: 13vw;
        height: 40vh;
        overflow: hidden;
        border: 1px solid #582323;
        border-radius: 1vh;
        transform: translateY(-100%);
        transition: transform 0.2s ease;
    }

    .showClose {
        background-image: url("../images/exit.png");
    }
    </style>`;

describe('Hamburger Menu is ', () => {
    test('toggled', () => {
        toggleMenu();
        expect(document.querySelector(".nav").classList).toMatchObject({"0": "nav", "1": "showNav"});
        expect(document.querySelector(".hamburgerMenu").classList).toMatchObject({"0": "hamburgerMenu", "1": "showClose"});
    })
    
    test('not toggled', () => {
        toggleMenu();
        expect(document.querySelector(".nav").classList).toMatchObject({"0": "nav"});
        expect(document.querySelector(".hamburgerMenu").classList).toMatchObject({"0": "hamburgerMenu"});
    })
})


describe('About page is ', () => {
    test('displayed', () => {
        displayAbout();
        expect(document.getElementById("aboutPage").style.display).toEqual("block");
        expect(document.getElementById("overlay").style.display).toEqual("block");
    })

    test('not displayed', () => {
        aboutClose();
        expect(document.getElementById("aboutPage").style.display).toEqual("none");
        expect(document.getElementById("overlay").style.display).toEqual("none");
    })
})

describe('How To page is ', () => {
    test('displayed', () => {
        displayHowTo();
        expect(document.getElementById("howTo").style.display).toEqual("block");
        expect(document.getElementById("overlay").style.display).toEqual("block");
    })

    test('not displayed', () => {
        howToClose();
        expect(document.getElementById("howTo").style.display).toEqual("none");
        expect(document.getElementById("overlay").style.display).toEqual("none");
    })
})

