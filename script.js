var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rando = document.querySelector("button");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value 
    +")";

    css.textContent = body.style.background + ";";
}

// Button generates random colors:

// Creates random RGB values---------------------------------

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRGBColor1() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomRGBColor2() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor1() {
    let [r,g,b] =randomRGBColor1();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
}

function randomHexColor2() {
    let [r,g,b] =randomRGBColor2();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
}

//-----------------------------------------------------------


function generateRandom() {
    var randomColor1 = randomHexColor1()
    var randomColor2 = randomHexColor2()
    body.style.background =
    "linear-gradient(to right, "
    + randomColor1
    +", "
    + randomColor2
    +")";

    if (generateRandom) {
        color1.value=randomColor1;
        color2.value=randomColor2;
    }

    css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rando.addEventListener("click", generateRandom);