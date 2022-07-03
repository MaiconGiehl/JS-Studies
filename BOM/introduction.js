console.log(opener)

document.querySelector("button").addEventListener("click", function() {
    window.open("history.html");
    window.open("history.html", "window-name", "width=600,height300");
})

var test = "introduction.html var";
// can be accessed in other page if it has been open with open();

function test2() {
    console.log("test2 alert");
}

// Scroll

// scrollTo() = scrolls to the position (0, 50) = to 50;
// scrollBy() = scrolls a total of pixels send on the secon parameter // (0, 50) = to 50, (0, 50) = to 100;
// pageXOffset or pageYOffset = your coordenates;

// Events

window.addEventListener("load", function () {
    console.log("load");
})

window.addEventListener("DOMContentLoaded", function () {
    console.log("DOMCOntentLoad")
})

window.addEventListener("resize", function () {
    console.log("resize", innerWidth, innerHeight);
})

window.addEventListener("scroll", function () {
    console.log("resize", pageYOffset, pageXOffset);
})

window.addEventListener("unload", function () {
    console.log("unload");
    debugger
    this.alert("unload")
})
window.addEventListener("beforeunload", function () {
    console.log("beforeunload");
    debugger
    this.alert("beforeunload")
})