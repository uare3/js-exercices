var fibonacci = [1, 2];
var valor = 3;
var i = 3;

while (valor <= 4000000) {
    fibonacci.push(i);
    valor = fibonacci[i - 1] + fibonacci[i - 2];
    i++;
}

var soma = 0;

for (var k = 0; k < fibonacci.length; k++){
    if (fibonacci[k] % 2 === 0) {
        soma += fibonacci(k)
    }
}
