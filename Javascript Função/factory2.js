function criarProduto(nome, preco, descricao){

    return  {
        nome: nome,
        preco: preco,
        descricao: descricao
    } 
}

const produto1 = criarProduto('Milke', 4.30, 'Leita Desnatado Piracanjuba');
console.log(produto1);

const produto2 = criarProduto('Coffe', 3, 'Café Babino Norte');
console.log(produto2); 