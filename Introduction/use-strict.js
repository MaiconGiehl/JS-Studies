// "use strict"; = usar sempre na primeira linha do codigo
"use strict"
let y = 10;

function foo() {
    "use strict",
    x = 20;
}
foo();
console.log(y);

/*
function dobrar(n1, n1) {
    "use strict"
    console.log(n1, n1)
    return n1* n1
 };

 console.log(dobrar(5, 7));
*/

function Teste() {
    "use strict"
    console.log(this)
    this.a = "a"
}

Teste()

let msg = "uma string";
msg.count = 0;
console.log(msg)