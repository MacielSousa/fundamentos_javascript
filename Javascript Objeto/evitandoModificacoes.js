//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Copo',
    preco: 10,
    tag: 'Promoção'
});

console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Bicicleta';
produto.descricacao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal
const pessoa = { noem: 'Juliano', idade: 35 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Maciel';
delete pessoa.nome;
pessoa.idade = 26;
console.log(pessoa);

//Object.freeze = selado + valores constantes;