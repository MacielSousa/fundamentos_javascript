const inverso = function(valor){
    let tipo = typeof(valor);

    if(tipo == "boolean"){
        return !valor;
    } else if(tipo == "number"){
        return -valor;
    } else{
        return `booleano ou números esperado, mas o parâmetro é do tipo string`;
    }
}

console.log(inverso('Maciel é o Cara!'));