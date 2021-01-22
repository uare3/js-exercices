var fs = require("fs");

fs.readFile("p022_names.txt", "utf-8", function(err, data){
    if (err){
        console.log(err)
    } else {
        var nomes = data.split(",");
        nomes = nomes.sort();
        
        var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
                            "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        var maiorScore = 0;
        var nomeMaiorScore = "";
        var somaTotal = 0;

        for(var i = 0; i < nomes.length; i++){
            var nome = nomes[i];
            var soma = 0;
            
            for (var j = 0; j < nome.length; i++){
                var letra = nome[j];

                var valor = alfabeto.indexOf(letra);
                if (valor !== -1) {
                    soma += valor + 1;
                }

            }     
            var score = soma * (i + 1)
            somaTotal += soma;
               
        }
        console.log(somaTotal)
    }
})




//for (var i = 0; i < nomes.lenght; i++){


