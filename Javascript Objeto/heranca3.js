const pai = { nome: 'Maciel', corCabelo: 'preto' }

const filha1 = Object.create(pai);
filha1.nome = 'Lucy';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Mary', writable: false, enumerable: true }
});

console.log(filha2.nome);
filha2.nome = 'Josa';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));
console.log();

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(`${key}`) : console.log(`Por herança ${key}`);
}