/*1) Função que retorna o nome do funcionário que tem o maior salário da empresa.
2) Função que retorna o nome do funcionário que tem o menor salário da empresa.
3) Função que retorna a média salarial da empresa.
4) Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do
setor informado.
5) Função que recebe um setor como parâmetro e retorna o funcionário de menor salário
do setor informado.
6) Função que recebe um setor como parâmetro e retorna a média salarial do setor
informado.*/

var fs = require('fs');
var arquivo = fs.readFileSync("funcionarios.json"); 
var empresa = JSON.parse(arquivo);   

//console.log(empresa.funcionarios[0].nome);

fs.writeFile(arquivo, JSON.stringify(arquivo), function (err) {
    if (err){
        console.log(err)
    }
})

/*var maiorSalarioEmpresa = 0;
    
for (var i = 0; i < empresa.funcionarios.lenght; i++){
    if (empresa.funcionarios[i].salario > empresa.funcionarios[i + 1].salario){
        maiorSalarioEmpresa = empresa.funcionarios[i].salario;
    }
        console.log("A pessoa com maior salário é " + empresa.funcionarios[i].salario);
} 

*/
