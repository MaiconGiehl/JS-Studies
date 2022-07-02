
const timeStart = Date.now();
let n = 0;
setTimeout(function () {
    console.log("timeout after 2000ms")
    const timeEnd = Date.now();
    console.log(timeEnd - timeStart)
}, 2000)

let str = "";
var d = document.querySelector("div");
for (let i = 0; i < 1000; i++) {
    str += `i: ${i} --`
    d.textContent += str
}


const interval = setInterval(function () {
    console.log("interval n: ", n++);
    if (n >= 9) {
        clearInterval(interval);
    }
}, 1000)