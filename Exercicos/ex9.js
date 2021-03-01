const repetir = function(num1, num2){
    let cont = [];
    while(num1 > 0){
        cont.push(num2);
        num1--;
    }
    return cont;
}

console.log(repetir(7, 3));