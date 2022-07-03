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