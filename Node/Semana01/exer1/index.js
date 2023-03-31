const prompt = require('prompt-sync')();
// const funcoes = require("./funcoes.js");

const array_alunos = [];

let maiorNota = 0;
let menorNota = 100;
let somaNotas = 0;
let aprovados = 0;
let reprovados = 0;

console.log("\n\nINSIRA NOME E A NOTA DE 10 ALUNOS!");
console.log("-------------------------------");
for (let index = 0; index < 10; index++) {
    let nome = prompt(`Nome do ${index + 1}º aluno: `);
    let nota = parseInt(prompt(`Nota do ${index + 1}º aluno: `));
    console.log("-------------------------------");

    const aluno = {
        nome: nome,
        nota: nota
    }
    // funcoes.inserir_aluno(aluno);
    inserir_aluno(aluno);

    somaNotas += nota;
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota <= menorNota) {
        menorNota = nota;
    }
    if (nota >= 6) {
        aprovados++;
    }
    if (nota < 6) {
        reprovados++;
    }
}

function inserir_aluno(aluno) {
    array_alunos.push(aluno);
}


// RESULTADOS
for (let index = 0; index < array_alunos.length; index++) {

    let item = array_alunos[index];
    if (item.nota == maiorNota) {
        console.log(`A maior nota é de ${item.nome}: ${maiorNota}`);
    }

    if (item.nota == menorNota) {
        console.log(`A menor nota é de ${item.nome}: ${menorNota}`);
    }
}

console.log("A média das notas é: " + somaNotas / 10);
console.log("A quantidade de aprovados é: " + aprovados);
console.log("A quantidade de reprovados é: " + reprovados);
console.log("-------------------------------");