//Cadeia de portótipos (prototype chain)
Object.prototype.sexo = 'Masculino'; //Não faça isso em casa!
const avo = { nome: 'Souza'}
const pai = { __proto__: avo, idade: 16 }
const filho = { __proto__: pai, cor: 'Parda' }

console.log(filho.sexo, filho.nome, filho.idade, filho.cor);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual+delta <= this.velMax){
            this.velAtual += delta;
        }else {
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}Km/h`; 
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(200);
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status());