let pontuacoes = [5];
let qtRecord = 0;
let piorPontuacao;

function recorders() {

    if (pontuacoes.length == 1) {
        return "Dados insuficientes para Analise!";
    } else {
        for (let i = 0; i < pontuacoes.length; i++) {
            if (pontuacoes.length > 1 && i < pontuacoes.length) {

                if (pontuacoes[i] > pontuacoes.reduce(function(a, b) {
                        return Math.min(a, b);
                    })) { piorPontuacao = i + 1 }
                if (pontuacoes[i + 1] > pontuacoes[i]) {

                    qtRecord++;

                }
            }

        }

    }
    return [qtRecord, piorPontuacao];
}

console.log(recorders());