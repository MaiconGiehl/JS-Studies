/*
Desafio: Contruir uma funcao para calcular a média

pode recer um ou mais valores numericos
deve retornar um unico numero
deve gerar um erro se receber um parametro nao numero
deve retornar zero caso nao receba nenhuma parametro
*/

(function() {
    function calcularMedia() {
        let total = 0;
        let qtd = arguments.length;
        for(let i = 0; i < qtd; i++) {
            if(typeof arguments[i] !== "number") {
                throw Error("Only numbers") 
            }
            total += arguments[i];
        }
        return (total / qtd) || 0;
    }

    let media1 = calcularMedia(2, 4, 6);
    console.log(media)
})()