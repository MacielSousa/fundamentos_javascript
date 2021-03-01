const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const funcionarias = function(funcionarios) {
    let fun = [];
    funcionarios.map(function(funcionario) {
        if (funcionario.pais === 'China' && funcionario.genero === 'F') {
            fun.push(funcionario);
        }
    })
    return fun;
}

const menorSalario = function(funcionarios) {
    let obj = {};
    let cont = 0;
    funcionarios.forEach(element => {
        if (cont == 0 || element.salario < obj.salario) {
            obj = element;
            cont = 1;
        };
    });
    console.log(obj);
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    menorSalario(funcionarias(funcionarios));
})