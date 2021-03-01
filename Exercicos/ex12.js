const removerPropriedade = function (obj1, propriedade){

    let obj2 = Object.assign({}, obj1);

    for(proprie in obj2){
        if(propriedade == proprie){
           delete obj2.sexo;
        }
    }
    return obj2;
}

obj1 = {nome: 'Maciel', idade: 25, sexo: 'M'};


console.log(Object.is(removerPropriedade(obj1, 'sexo'), obj1));


 