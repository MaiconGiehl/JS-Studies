let arr = [1, 2, 3, 4]
// arr.reverse()

let j = 0;
let soma = arr.reduce( function(acumulador, atual, i, _arr) {
    console.log("i: ", i)
    console.log("j: ", j++)
    console.log("j: ", _arr)
    console.log("acumulador: " + acumulador + "----------atual: " + atual)

    return acumulador + atual;
}, 0 )

console.log(soma)
console.log(arr)

/*
    1-
    nomes = {}
    nomeAtual = "Daniel" -> primeiraLetra = nomeaAtual[0] = "D"
    return {D: 1}

    2-
    nomes = {D: 1}
    nomeAtual = "Maria" -> primeiraLetra = nomeaAtual[0] = "M"
    return {D: 1, M: 1}

    3-
    nomes = {D: 1}
    nomeAtual = "Joana" -> primeiraLetra = nomeaAtual[0] = "J"
    return {D: 1, M: 1, J: 1}

    3-
    nomes = {D: 1}
    nomeAtual = "João" -> primeiraLetra = nomeaAtual[0] = "J"
    return {D: 1, M: 1, J: 2}
*/

const nomes = ["Daniel", "Maria", "Joana", "João"]

let nomesPorOrdem = nomes.reduce( function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {} )

console.log(nomesPorOrdem)


const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]

let numerosUnicos = numeros.reduce( function(numerosUnicos, numeroAtual){
    if (numerosUnicos.indexOf(numeroAtual) < 0) {
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
}, [] )

console.log(numerosUnicos)

// const numerosUnicos = [1, 3, 4, 5, 8, 9]