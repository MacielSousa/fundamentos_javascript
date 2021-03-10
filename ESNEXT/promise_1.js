let a = 1;
console.log(a);


let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos']);
});

p.then(valor => valor)
.then(valor => valor = 'Ana')
.then(valor => valor.toUpperCase())
.then(console.log)
