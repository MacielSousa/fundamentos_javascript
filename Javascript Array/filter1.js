const produtos = [ 
    { nome: 'Notebook', preco: 5000, fragil: true},
    { nome: 'iPade Pro', preco: 6000, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.90, fragil: true},
    { nome: 'Copo de Plástico', preco: 10, fragil: false}
];

console.log(produtos.filter(function(p){

    return p.preco > 400 && p.fragil;

}))