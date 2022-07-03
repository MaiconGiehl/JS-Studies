let n1 = "10.123";
n1 = parseFloat(n1);

let n2 = 2;

console.log(n1 + n2, typeof n1, typeof n2, n1)

// parseInt, parseFloat, Number()

//number = se há letras, a conta consta como NaN, enquanto os parse's apenas descartam o que há pós-letra

let n11 = "10a";
// n1 = parseInt(n1);
n11 = Number(n11);

let n21 = 21;

console.log(n11 + n2, typeof n11, typeof n2, n11)

n2 = 10
// n2 =n2 + ""

n2 = n2.toString(2)

console.log(n2, typeof n2)

// decimais = 0 - 9
// hexadecimais 0 - f (15)