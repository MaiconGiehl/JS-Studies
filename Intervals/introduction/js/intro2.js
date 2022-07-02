
const timeStart = Date.now();
let n = 0;

let str = "";
var d = document.querySelector("div");

setTimeout(function () {
    for (let i = 0; i < 1000; i++) {
        str += `i: ${i} --`
        d.textContent += str
    }
}, 3000)


const interval = setInterval(function () {
    console.log("interval n: ", n++);
    if (n > 10) {
        clearInterval(interval);
        const timeEnd = Date.now();
        console.log(timeEnd - timeStart);
    }
}, 1000)