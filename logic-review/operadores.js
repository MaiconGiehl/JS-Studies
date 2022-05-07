// + - * / % **

// % = resto da divisao
// ** = potencia

let n1 = 10;
let n2 = 5;

// OPERADORES ARITMÉTICOS
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(2 ** 3);

//OPERADORES DE ATRIBUICAO
let n3 = 20;
// n3 = n3 + 15;
n3 += 2;
console.log(n3);
 
// INCREMENTO E DECREMENTO
let i = 0;
i = i + 1;
i += 1;
i++;
++i;
console.log(i);

// Comparação
/*
    igualdade de valor ==
    igualdade e tipo ===
    <, >, <=, >=
    != valores diferentes
    !== valores e tipos diferentes
*/
console.log(n1, n2, n3);

console.log(n1 === "10");
console.log(n1 >= 10);

console.log(n1 != 10);
console.log(n1 !== "10");


// Operadores Lógicos 
// And (&&), Or (||), Not (!)

/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
OU 
acompanhado com os pais
E
ter comprado bilhete
*/

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPrep0sentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

console.log(n1, n2, n3);
n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2;
// multiplicação e divisão recebem preferencia

console.log(`media: ${media}`);

console.log((3 * 2) ** 2)