let idade = 17;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

// let msgMaiorIdade = ""
// if(idade >= 18) {
//     msgMaiorIdade = "É maior de idade"
// } else {
//     msgMaiorIdade = "É menor de 18 anos"
// }

// if(!comprouBilhete){
//     console.log("Não comprou o bilhete");
// } else {
//     if(idade >=18){
//         console.log("É maior de idade, pode viajar");
//     } else {
//         console.log("Opa! É menor de idade");
//     }
// }
let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

if(!comprouBilhete) {
    console.log("Não comprou o bilhete");
} else {
    console.log(msgMaiorIdade);
}



let n1 = 6;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`)

if (n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else if ( media < 7) {
    console.log("Reprovado, mas há como recuperar");
} else {
    console.log("Aprovado");
}

console.log("saiu do bloco if");