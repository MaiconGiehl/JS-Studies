// melhor jeito pprt
function somar () {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar(1, 2, 3, 5, 15, 90))
console.log(somar(1, 2, 3, 5, 15, 90, 80, 15))
console.log(somar(1, 2, 3, 5, 15, 90, 80, 15, 55, 32, 44))


// funcoes sem nome ficam com o nome da ConstantSourceNode. por exemplo, a funcao abaixo fica salvo com o nome "somar". 
// vale para todas declaracoes de funcao

// pode assim tambem:
// const somar = function () {
//     console.log(arguments)
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(console.name)

// console.log(somar(1, 2, 3, 5, 15, 90))
// console.log(somar(1, 2, 3, 5, 15, 90, 80, 15))
// console.log(somar(1, 2, 3, 5, 15, 90, 80, 15, 55, 32, 44))


/*
Não usar assim:
const somar = fu() => {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar(1, 2, 3, 5, 15, 90))
console.log(somar(1, 2, 3, 5, 15, 90, 80, 15))
console.log(somar(1, 2, 3, 5, 15, 90, 80, 15, 55, 32, 44))
*/