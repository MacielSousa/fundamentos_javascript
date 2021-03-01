function fatorial(num){

    let fat = 1;
    let cont = 1;
    while(cont <= num){
        fat *= cont;
        cont++;
    }

    return `Fatorial de ${5} e igual ${fat}`;

}

console.log(fatorial(6));