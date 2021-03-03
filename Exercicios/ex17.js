const somaNumero = function(arryNumber) {

    let soma = 0;
    arryNumber.map(function(numero) {
        soma += numero;
    });
    return soma;
}

console.log(somaNumero([10, 100, 80, 0, 45]));