const arrayPessoa = function(obj){

    let array = []
    for(atributo in obj){
        array.push([`"${atributo}", ${obj[atributo]}`]);
    }
    return array;
}

const pessoa = {nome: 'Maciel', idade: '25', sexo: 'Masculino'};

console.log(arrayPessoa(pessoa));