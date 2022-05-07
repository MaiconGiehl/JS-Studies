
// function init() {
//     let isValid = true;
//     console.log("init menu", isValid);
// }
// init()

(function (win, doc) {
    "us strict"
    let isValid = false;
    win.alert("ola mundo");
    console.log("init menu", isValid);

    function init(){
        console.log("init do menu");
    }
    init()
})(window, document);