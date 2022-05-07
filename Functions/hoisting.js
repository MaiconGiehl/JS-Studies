// Funções sao tipos de objetos com a incrivel capacidade de serem invocados

//hoisting = capacidade do js de "içar uma function declaration"

function teste () {
    console.log("teste");
}

teste();

//mas

/*

teste2();
const teste2 = function teste() {
    console.log("teste2");
}
*/

// a variavel existe antes da renderizacao do code, mas o valor só é atribuido após a execução do mesmo;
// const e let nao existem antes da renderizacao (sem hoisting);
console.log(minhaVar)
var minhaVar = "variavel"