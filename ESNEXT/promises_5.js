
function funcrionarOuNao(valor, chancerErr){

    return new Promise((resolve, reject) => {

        try{

            con.log('temp');
            if(Math.random() < chancerErr){

                reject('Ocorreu um erro');
    
            }else {
                resolve(valor);
            }

        }catch(e){
            reject(e);
        }

    })

}


funcrionarOuNao('Testando....', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        //err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))