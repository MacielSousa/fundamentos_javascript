function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject ) => {

        setTimeout(() => {
            resolve(frase);
        }, segundos * 1000)

    });

}

falarDepoisDe(3, "Oi Maciel,  está tudo bem com você!")
    .then((frase) => { return frase.concat('?!?') })
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))