//Armazenando um função em uma variavel
const imprimaSoma = function (a, b){

    console.log(a+b);

}

imprimaSoma(10, 90);

//Armazenamento uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a+b;
}

console.log(soma(20, 30));

// retorno implicito
const subtracao = (a, b) => a-b;
console.log(subtracao(10, 5));

const imprima2 = a => console.log(a);
imprima2("Maciel Acertou!");