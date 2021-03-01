function calcular(a, b, c){

    if((a * b * c) > 0){
        if(a === b && b === c){
            console.log(`Equilátero -> Os três lados são iguais: A = ${a}, B = ${b}, C = ${c}`);
        }else if(a != b && b != c && c != a){
    
            console.log(` Escaleno -> Todos os lados são diferentes: A = ${a}, B = ${b}, C = ${c}`);
    
        }else {
    
            console.log(` Isósceles -> : Dois lados iguais: A = ${a}, B = ${b}, C = ${c}`);
    
        }
    }

}

calcular(1, 5, 10);