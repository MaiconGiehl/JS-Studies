let n = 0;

// if(!n) {
//     n = 10;
// }

n = n || 10;

console.log(n);

// let isValid = true;
// if (isValid) {
//     console.log("É válido");
// }

let isValid = true;

isValid && console.log("É válido");
isValid || console.log("Não é válido");