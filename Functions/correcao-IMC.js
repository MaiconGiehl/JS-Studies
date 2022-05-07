function calcularIMC(peso, altura){
    return peso / (altura * altura);
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
console.log(imc);
console.log((classificaIMC(imc)));