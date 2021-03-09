//Operador ... rest(juntat)/spread(espalhar)
//user rest com parâmetro de função

// usar spread com objeto
const funcionario =  {nome: 'Maciel', salario: 947574.90};
const clone =  {ativo: true, ...funcionario};
console.log(clone);

//usar spread com array
const gurpoA = ['João', 'Maria', 'Madalena'];
const gurpoFinal = ['Maciel', ...gurpoA];
console.log(gurpoFinal);
