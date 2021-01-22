var readline = require("readline");
const { stdout } = require("process");
var rl = readline.createInterface({
    input: process.stdin,
    output: stdout
});

var numeroAleatorio = Math.round((Math.random()*100));
if (numeroAleatorio === 0){
    numeroAleatorio == 1;
}
pergunta();

var tentativas = 10

function pergunta() {
    rl.question("Digite um número: ", function(numero){
    tentativas--;
    if (numeroAleatorio == numero){
        console.log("Parabéns! Você acertou!");
        rl.close();
    } else if (tentativas == 0) {
        console.log("Que pena, você não tem mais tentativas!");
        rl.close();
    } else if (numero > numeroAleatorio) {
        console.log("Você errou! Seu palpite é maior do que o número. Tente de novo, você tem " + 
        tentativas + " tentativa(s).");
        pergunta ();
    } else {
        console.log("Você errou! Seu palpite é menor do que o número. Tente de novo, você tem " + 
                    tentativas + " tentativa(s).");
        pergunta ();
    }
})
}
