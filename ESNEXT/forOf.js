for (let letras of "Maciel"){
    console.log(letras);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

for(let i in assuntosEcma){
    console.log(i);
}

for(let assunto of assuntosEcma){
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordar:  true }],
    ['Set', {abordar: true}],
    ['Promise', {acordar: false}]
]);

//Percorrendo chave e valor.
for (let assunto of assuntosMap){
    console.log(assunto);
}

//percorrendo com apenas chaves.
for (let chave of assuntosMap.keys()){
    console.log(chave);
}

//Passando somente valor de cada chave.
for(let valor of assuntosMap.values()){
    console.log(valor);
}

//Desestruturando array
for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c']);
for(let letra of s){
    console.log(letra);
}