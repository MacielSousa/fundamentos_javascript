 const receberPrimeiroEultimoElemento = function(elementos){
     let array = [];
     array.push(elementos[0]);
     array.push(elementos[elementos.length-1]);
     return array; 
 }

 const alunos = ['Maciel', 'Francisco', 'Maria', 'Jose', 'Jesus'];

 console.log(receberPrimeiroEultimoElemento(alunos));