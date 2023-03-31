const index = require("./index.js");

exports.inserir_aluno = function inserir(aluno) {
    index.array_alunos.push(aluno);
}