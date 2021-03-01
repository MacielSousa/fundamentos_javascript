const pilotos = ['Vettel', 'Alonso', 'Raikkanen', 'Massa'];
pilotos.pop(); //massa quebrou o carrro, tira o item da ultima posição do array;
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift() // remove o primeiro item da lista
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

//splice pode adiciona e remove elementos

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//remover elementos
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array;
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 3);
console.log(algunsPilotos2);