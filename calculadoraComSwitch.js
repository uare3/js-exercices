var operacao = process.argv[2];
var valor1 = parseInt(process.argv[3]);
var valor2 = parseInt(process.argv[4]);

var resultado = 0;

switch(operacao){
    case "soma":
        resultado = valor1 + valor2;
        break;
    case "subtração":
        resultado = valor1 - valor2;
        break;
    case "multiplicação":
        resultado = valor1 * valor2
        break;
    case "divisão":
        resultado = valor1 / valor2
        break;
    case "resto":
        resultado = valor1 % valor2
        break;
    case "porcentagem":
        resultado = valor1 * valor2 / 100
        break;
    default:
        resultado = 0
    }
     
console.log(resultado)