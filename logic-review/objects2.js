const pessoa = {
    nome: "Maria",
    idade: 28,
    "email": "ela@server.com",
}

for(let prop in pessoa) {
    console.log(prop);
    console.log(pessoa[prop]);
    // console.log(pessoa[prop]);
}

// prop = propriedade (não o valor);