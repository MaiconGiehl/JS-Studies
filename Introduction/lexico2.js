let x = 10;
x = "uma string";
console.log(x);

let msg = "uma \"string";
console.log(msg);

console.log("ola" * 2);
console.log("2" * 2);

function teste() {
    console.log(this)
}
teste()

const teste2 = () => {
    console.log("teste2")
    console.log(this)
}

const obj = {
    n: 1,
    teste,
    teste2
}
obj.teste2()