var operacao = process.argv[2];
var valor1 = parseInt(process.argv[3]);
var valor2 = parseInt(process.argv[4]);

var resultado = 0;

if (operacao === "soma"){
    resultado = valor1 + valor2;
} else if (operacao === "subtração"){
    resultado = valor1 - valor2;
} else if (operacao === "divisão"){
    resultado = valor1 / valor2;
} else if (operacao === "multiplicação"){
    resultado = valor1 * valor2;
} else if (operacao === "resto"){
    resultado = valor1 % valor2;
} else if (operacao === "porcentagem") {
    resultado = valor1 * valor2 / 100;
}

console.log(resultado)