const multiplicacao = function(num1, num2){
    let cont = 0;
    
    while(num1 > 0){
        cont += num2;
        num1--;
    }

    return cont;
}

console.log(multiplicacao(7, 0));