/* Desafio: Contruir uma funcao para calcular a média

pode recer um ou mais valores numericos
deve retornar um unico numero
deve gerar um erro se receber um parametro nao numero
deve retornar zero caso nao receba nenhuma parametro
*/

        let valores = [];
        let total = 0;

        function pedirValor() {

            let pedir = parseInt(prompt("insira um valor!"));

            try{
                if(isNaN(pedir)) {
                    throw Error ("nao era um numero");
                } else {
                    valores.push(pedir);
                    total += valores[valores.length - 1];
                }
            } catch(e) {
                alert("Ocorreu um erro: adicione apenas números.")
                console.log(e.message);
            }
        }

        function calcular() {
            let media = (total / valores.length);
            console.log("Media = " + media);
            alert("Media = " + media);
        }