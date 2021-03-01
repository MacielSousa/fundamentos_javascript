const nome = "Maciel";

console.log(nome.charAt(4));
console.log(nome.charAt(6));
console.log(nome.charCodeAt(3));
console.log(nome.indexOf('e'));

console.log(nome.substring(4));
console.log(nome.substring(2, 5));

console.log('Nome: '.concat(nome).concat("!"))
console.log(nome.replace("e", 4));
console.log('Nome: ' + nome + "!");
console.log(nome.replace(/\w/g, 'e'));

console.log('Maciel, Maria, João'.split(','));