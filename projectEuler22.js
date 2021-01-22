/*Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over 
five-thousand first names, begin by sorting it into alphabetical order. Then working out the 
alphabetical value for each name, multiply this value by its alphabetical position in the list to 
obtain a name score.
For example, when the list is sorted into alphabetical order, COLIN, 
which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?*/

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


