 // Coleção dinâmica de pares chave/valor

 const produto = new Object
 produto.nome = 'Cadeira';
 produto['marca do produto'] = 'Generica';
 produto.preco = 220;

 console.log(produto);
 delete produto.preco;
 delete produto['marca do produto'];
 console.log(produto);

 const carro = {
     modelo: 'A4',
     valor: 89000,
     proprietario: {
         nome: 'Raul',
         idade: 56,
         endereco: {
             quadra: 1000,
             alameda: 15,
             numero: 10
         }
     },
     condutores: [{
        nome: 'João',
        idade: 20
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        
        //...  

    }
 }

 carro.proprietario.endereco.numero = 300;
 carro['proprietario']['endereco']['alameda'] = 13;

 console.log(carro);

 //delete carro.condutores;
 delete carro.proprietario.endereco;
 delete carro.calcularValorSeguro;

 console.log(carro);
 console.log(carro.condutores);
 console.log(carro.condutores.length);