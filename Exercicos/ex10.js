const simboloMais = function(num){
    let cont = '';
    while(num > 0){
        cont += '+';
        num--;
    }
    return cont;
}

console.log(simboloMais(30));