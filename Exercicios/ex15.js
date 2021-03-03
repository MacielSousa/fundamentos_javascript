const paresToPares = function(array1){
    let array2 = [];
    for(let i = 0; i < array1.length; i++){
        if(i % 2 == 0 && array1[i] % 2 == 0){
            array2.push(array1[i]);
        }
    }
    console.log(array2);
}

paresToPares([10, 70, 22, 43]);