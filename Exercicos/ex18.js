const despesasTotais = function(arrayDespesas) {
    let despessas = 0;
    arrayDespesas.map(function(obj) {
        despessas += obj.preco;
        //console.log(obj);
    })
    return despessas;
}

let des = [
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
];
console.log(despesasTotais(des));