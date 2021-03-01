function nota (num){

    if((num+2) % 5 === 0 && (num+2) > 38){

        return `Aprovado: ${(num+2)}`

    } else if(num > 40){
        return `Aprovado: ${num}`;
    } else if(num > 38){
        return `Aprovado: ${num+2}`;
    }else{
        return `Reprovado: ${num}`
    }

}

console.log(nota(39));