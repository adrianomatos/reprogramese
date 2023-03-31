const prompt = require('prompt-sync')();

alturas = []

// Implementar a entrada de dados
for (let index = 0; index < 10; index++) {
  alturas.push(parseFloat(prompt("Aluno " + (index + 1) + ". Digite sua altura: ")));
}

// Implementar o processamento de dados
// Fazer for dentro de for

for (let index = 0; index < 10; index++) {
  var maior = 0;
  for (let indexB = 0; indexB < 10; indexB++) {
    if (alturas[index] > alturas[indexB]) {
      maior++;
    }
  }
  console.log("Aluno " + (index + 1) + ". Sua altura é maior do que " + maior + " alunos.");
}
// Implementar a saída de dados
