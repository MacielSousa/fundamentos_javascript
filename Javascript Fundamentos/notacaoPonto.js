console.log(Math.ceil(9.1));
const objt1 = {};
objt1.nome = 'Bola';
//objt1['nome'] = 'Bola';
console.log(objt1.nome);

function Obj(nome){

    this.nome  = nome;
    this.exec = function(){
        console.log('Exec...');
    }

}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();