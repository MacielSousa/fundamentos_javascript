const estaEntre = function(numero, minimo, maximo, inclusivo = false){
    if(inclusivo) return nnumero >= minimo && numero <= maximo; 

    return numero > minimo && numero < maximo;
}

console.log(estaEntre(160, 16, 100));