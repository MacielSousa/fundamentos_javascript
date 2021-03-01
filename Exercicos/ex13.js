const filtrarNumeros = function(array1, array2){

    let array3 = [];
    array2.forEach(element => {
        if (array1.indexOf(element) != -1) array3.push(element);
    });

    return array3;

}

console.log(filtrarNumeros([1, 2, 3, 4], [2, 4]));
