const prompt = require("prompt-sync")();

// Leia os três números
valor1 = parseFloat(prompt("Insira o 1º valor: "));
valor2 = parseFloat(prompt("Insira o 2º valor: "));
valor3 = parseFloat(prompt("Insira o 3º valor: "));
// Calcule a soma e a média
soma = valor1 + valor2 + valor3;
media = soma/3;
// Mostre na tela o valor da soma e média
console.log("A soma é:", soma)//Você apenqas esqueceu de fechar os comandos com o caracter ";"
console.log("A média é:", media)//Você apenqas esqueceu de fechar os comandos com o caracter ";"
console.log("\n############################################################");
console.log("Meus Parabéns!!! Sua nota nesta primeira atividade foi: 4,00");