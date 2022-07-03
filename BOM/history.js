console.log(opener);

if (opener) {
    opener.test2();
};

document.getElementById("btnBack").addEventListener("click", function () {
    history.back();
});

document.getElementById("btnForward").addEventListener("click", function () {
    history.forward();
});
document.getElementById("btnClose").addEventListener("click", function() {
    close();
});

// screen x == window horizontal coordenates
// screen x == window vertical coordenates
// innerWidth or height == workable area 
// innerWidth or height == total area 
    
// Location = info about actual URL
// Navigator = info about the user agent
// Screen = info about the screen (not about browser)