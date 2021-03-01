function calcular(numero){

    return numero.toString().substring(0, 4).replace(".", ",");

}

console.log(calcular(0.30000000000000004));