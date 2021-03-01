 //novo recurso do ES2015

 const pessoa = {
     nome: 'Maciel',
     idade: 25,
     endereco: {
         alameda: 13,
         casa: 36,
         CEP: 7700000
     }
 }

 const {nome, idade} = pessoa;
 console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome, bemHumorado);

const { endereco: {alameda, casa, CEP} } = pessoa;
console.log(alameda, casa, CEP);

const { conta: {ag, num } } = pessoa;
console.log(ag, num);