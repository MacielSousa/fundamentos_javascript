const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { frameElement: true });

console.log(tecnologias.react);
console.log(tecnologias.get('react'));

const chavesVarias = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVarias.forEach((vl, ch) => {

    console.log(ch, vl);

});
console.log(chavesVarias.has(123));
chavesVarias.delete(123);
console.log(chavesVarias.has(123));
console.log(chavesVarias.size);

chavesVarias.set(123, 'a');
chavesVarias.set(123, 'b');
console.log(chavesVarias);