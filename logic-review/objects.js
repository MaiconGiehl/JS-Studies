// const nomes = ["Daniel", "Maria", "Joao"];
// const idades = [null, 40, 28, 35];
// console.log(nomes[0], idades[0]);

const pessoa = new Object()
pessoa.nome = "Daniel"
pessoa.idade = 40
console.log(pessoa)

console.log(pessoa.nome);
console.log(pessoa.idade);

// ||

let prop = "nome"
console.log(pessoa[prop]);
console.log(pessoa["idade"]);


const pessoa2 = {
    nome: "Daniel",
    idade: 40
}
console.log(pessoa2)