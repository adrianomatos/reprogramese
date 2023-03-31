// Quando definimos uma string na verdade, ela vira um objeto do tipo string, e isso nos oferece uma série de métodos que podemos utilizar para manipular essa string.

var string = `Este é um 'texto entre aspas', legal né`;
console.log(string);
console.log("Tamanho da string: " + string.length);
console.log("Primeira letra: " + string[0]);
console.log("Última letra: " + string[38]);
console.log("Última letra: " + string[string.length - 1]);
console.log("Frase em Maiúsculo: " + string.toUpperCase());

var string2 = `ESTE É UM 'TEXTO ENTRE ASPAS', LEGAL NÉ`;
console.log("Frase em Minúsculo: " + string2.toLowerCase());

var nome = "Adriano Rodrigues de Matos"

console.log("\nSubstituição de texto: " + nome.replace('Matos', 'Matttos'));
console.log("Impressão de texto original: " + nome + "\n");

console.log(nome + " termina com a letra S?: " + nome.endsWith('s'));
console.log(nome + " começa com a letra A?: " + nome.startsWith('A'));

if (nome.endsWith('Matos')) {
    console.log("Sobrenome é Matos!");
}

if (nome.startsWith('Adriano')) {
    console.log("Primeiro nome é Adriano!\n");
}

// cria array com partes da string usando um caractere como divisor
// console.log(nome.split(' '));
console.log(nome.split('a'));

var string3 = "\n TRIM remove espaço antes e depois da string ";
console.log(string3);
console.log(string3.trim());
// End e Start remove espaços do início e do final da string
// console.log(string3.trimEnd());
// console.log(string3.trimStart());

// Busca na string
if (string3.includes('TRIM')) {
    console.log("\nPalavra TRIM encontrada\n");
} else {
    console.log("\nPalavra TRIM não encontrada\n");
}


