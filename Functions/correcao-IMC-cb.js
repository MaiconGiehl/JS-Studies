function calcularIMC(peso, altura, callback){
    if(isNaN(peso) || isNaN(altura)) {
        throw Error("need two parameters: weight and height")
    }
    let imc = peso / (altura * altura)
    if(typeof callback === "function") {
        return callback(imc)
    }
    return imc;
}

function classificaIMC(imc) {
    if(imc < 16.9) {
        return "Muito abaixo do peso"
    }
    else if (imc <= 18.4) {
        return "Abaixo do peso";
    }
    else if (imc <= 24.9) {
        return "Normal"
    }
    else if (imc <= 29.9) {
        return "Acima do peso"
    }
    else if (imc <= 34.9) {
        return "Obesidade Grau I"
    }
    else if (imc <= 40) {
        return "Obesidade Grau II"
    }
    else if (imc >= 40) {
        return "Obesidade Grau III"
    }
}

let imc = calcularIMC(80, 1.65);
let imc2 = calcularIMC(80, 1.65, classificaIMC);
console.log(imc);
console.log(imc2);
