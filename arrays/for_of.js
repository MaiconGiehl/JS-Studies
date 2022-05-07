const arr = [1,2,3]

const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com"
}

for(let prop in obj) {
    console.log(prop)
    console.log(obj[prop])
}

for(n of arr) {
    console.log(n)
}

console.log(typeof arr)
console.log(typeof obj)