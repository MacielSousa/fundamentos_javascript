function jurosSimples(valorInicial, taxaDeJuros, periodoDeTrasasao) {

    return valorInicial * taxaDeJuros * periodoDeTrasasao;

}

function jurosComposto(valorInicial, taxaDeJuros, periodoDeTrasasao) {

    return valorInicial * ((1 + taxaDeJuros) ^ periodoDeTrasasao);

}

console.log("Jusros Simples:" + jurosSimples(1000, 0.2, 4));
console.log("Juros Composto:" + jurosComposto(5000, 0.4, 48));