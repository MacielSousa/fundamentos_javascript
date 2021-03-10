const fs = require('fs');
const path = require('path');

const leituraDado = (caminho) =>{
    return new Promise( resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString());
        })
    })
}

const caminho = path.join(__dirname, 'dado.txt');

leituraDado(caminho).then(console.log)
