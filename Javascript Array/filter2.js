Array.prototype.filter2 = function(callback){

    const newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){

            newArray.push(this[i]);

        }
    }

    return newArray;
}


const produtos = [ 
    { nome: 'Notebook', preco: 5000, fragil: true},
    { nome: 'iPade Pro', preco: 6000, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.90, fragil: true},
    { nome: 'Copo de Plástico', preco: 10, fragil: false}
];


console.log(produtos.filter2(function(p){

    return p.preco > 5000 && p.fragil;

}));