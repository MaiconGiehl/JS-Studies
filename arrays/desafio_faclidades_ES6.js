let valores = [15, 23, 32, 41, 52]

// function sum(valores) {



//     const soma = valores.reduce(function( valor, valorAtual, i){
//         rpt.unshift(i)
//         valor = valor + valorAtual
//         return valor;

//     }, 0)

//     return soma;
// }

function sum(valores) {

    let soma = 0;
    
    for(let numeroAtual of valores) {
        soma = soma + numeroAtual
    }

    return soma
    
    // let soma = 0;
    // for(let i = 0; i < valores.length; i++) {
    //     soma += valores[i]
    // }
    // console.log(soma)
}


function average(soma, valores) {

    let media = soma / valores.length
    return media
    
}

let soma = sum(valores)
let media = average(soma, valores)

console.log("soma: ", soma)
console.log("media: ", media)