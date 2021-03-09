// let e const
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);

//Templeta String
 const produto = 'iPod';
 console.log(`${produto}
 é
 caro!`);

 //Destructuring
 const [l, e, ...tras]  = "Cod3r";
 console.log([l, e, tras]);

const [x, ,y] = [1, 2, 3];
console.log(x, y);

const {idade: i, nome} = {nome: 'Maciel', idade: 25 };
console.log(i, nome);