// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3};

console.log(Object.keys(obj));//Ecma antigo
console.log(Object.values(obj));//Ecama novo
console.log(Object.entries(obj));//Retorna o object em forma de matriz chave e valor

//Melhorias na Notação Literal
const nome = 'Carla';
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {};
class Cachorro extends Animal {
    falar (){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar());