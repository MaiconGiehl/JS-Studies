
    function calculo(peso, altura) {
        if(isNaN(peso) || isNaN(altura)) {
            throw Error("need two parameters: weight and height")
        } else {
        return peso / (altura * altura);
        }
    }

    function classe(imc) {
        if(imc <= 16.9) {
            return "Muito abaixo do peso";
        }
        else if (imc >= 17 && imc <= 18.4) {
            return "Abaixo do peso";
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            return "Peso Normal";
        }
        else if (imc >= 25 && imc <= 29.9) {
            return "Acima do peso";
        }
        else if (imc >= 30 && imc <= 34.9) {
            return "Obesidade Grau I";
        }
        else if (imc >= 35 && imc <= 40) {
            return "Obesidade Grau II";
        }
        else if (imc >= 40) {
            return "Obesidade Grau III";
        }
    }

    console.log(classe(calculo(71, 1.82)));