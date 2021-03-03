const calcularMedia = function(arrayNumber) {

    let cont = 0;
    arrayNumber.map(function(numero) {
        cont += numero;
    })
    return cont;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));