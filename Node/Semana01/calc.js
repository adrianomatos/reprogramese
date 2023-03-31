const prompt = require('prompt-sync')();

const calculadora = require("./calculadora.js");

var num1 = parseInt(prompt("Digite um número: "));
var num2 = Number(prompt("Digite outro número: "));

// console.log("A soma entre os números "+num1+" + "+num2+" é: ");
console.log(`\nA SOMA entre os números ${num1} + ${num2} é: ` + calculadora.adicao(num1, num2));
console.log(`A DIFERENÇA entre os números ${num1} - ${num2} é: ` + calculadora.subtracao(num1, num2));
console.log(`A MULTIPLICAÇÃO entre os números ${num1} * ${num2} é: ` + calculadora.multiplicacao(num1, num2));
console.log(`A DIVISÃO entre os números ${num1} / ${num2} é: ` + calculadora.divisao(num1, num2));