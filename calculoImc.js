function calcularImc (){ // p / h2
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var imcResultado = "";
    if (imc < 18.5){
        imcResultado = "Abaixo do peso";
    } else if ((imc >= 18.5) && (imc < 25)){
        imcResultado = "Peso normal";
    } else if ((imc >= 25) && (imc < 30)){
        imcResultado = "Acima do peso";
    } else if ((imc >= 30) && (imc < 35)){
        imcResultado = "Obesidade I";
    } else if ((imc >= 35) && (imc < 40)) {
        imcResultado = "Obesidade II";
    } else {
        imcResultado = "Obesidade III"
    }
    
    console.log(imc);
    document.getElementById("resultado").innerHTML = "Seu IMC é " + imc;
    console.log(imcResultado);
    document.getElementById("classificacao").innerHTML = "A sua classificação é: " + imcResultado;
}