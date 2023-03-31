const prompt = require('prompt-sync')();

var nome = prompt('Digite seu nome: ');
var idade = prompt('Digite sua idade: ');

if (idade >= 18) {
    console.log(`${nome}, você é maior de idade!`);
} else {
    console.log(nome + ", você é menor idade!");
}

// cd sem...
// node scr...