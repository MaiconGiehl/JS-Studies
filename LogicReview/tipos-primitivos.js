// comentar = ctrl k + ctrl c;
// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)

let minhaVar = "minha string"
let minhaVar2 = 'minha \'string\' com aspas simples'
var minhaVar3 = `minha template literal`;

console.log(minhaVar2);

let idade = 40
// let msg = "eu possuo " + idade + "anos";
let msg = `eu possuo ${idade} anos`

console.log(msg);
console.log("Hello" + "world")
console.log(typeof msg, typeof idade, typeof minhaVar)

//typeof = verificar o tipo de variavel

const n1 = 10;
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = true;
console.log(`ìsValid: ${isValid}`);

const notValid = false;
console.log(`notValid: ${notValid}`);


let varTeste = null;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);

