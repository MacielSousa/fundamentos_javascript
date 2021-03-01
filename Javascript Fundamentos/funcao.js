//Função sem retorno
function imprimaSoma(a, b){

    console.log(a + b);

}

imprimaSoma(300, 200);
imprimaSoma(3);
imprimaSoma(2, 3, 4, 5, 6, 90);
imprimaSoma();

//Funcao com retorno
function soma(a, b = 1){

    return a + b;

}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());