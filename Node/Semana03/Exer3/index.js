const prompt = require('prompt-sync')();
const funcoes = require("./funcoes");
const fs = require('fs');

var opcao = 0;
var sair = true;
function menu() {
    console.log("------------------------------------------");
    console.log('Sistema de cadastro de carros');
    console.log('1 - Listar carros ');
    console.log('2 - Cadastrar novo carro ');
    console.log('3 - Sair do sistema ');
    opcao = Number(prompt("Digite a opção desejada: "));
    console.log("------------------------------------------");
}

// while (sair) {
    menu();
    
    if (opcao == 1) {
        funcoes.exibir();
    }

    else if (opcao == 2) {
        funcoes.editar();
    }

    else if (opcao == 3) {
        sair = false;
    }

    else {
        console.log("OPÇÃO INVÁLIDA. Digite outra opção...");
    }
// }

console.log("Saindo do sistema...");



// CRIAR ARQUIVO
// var placa = prompt("Digite a placa do carro: ");
// var nome = prompt("Digite o nome do modelo do carro: ");
// var montadora = prompt("Digite o nome da montadora do carro: ");

// // GERAR o arquivo
// fs.writeFile('./arquivo.json', `{
//             "veiculos":[{
//                 "placa": "${placa}",
//                 "nome": "${nome}",
//                 "montadora": "${montadora}"
//             }]
//         }`, (erro) => {
//     if (erro) {
//         return console.log('Ocorreu um erro ao criar');
//     }
//     console.log('Arquivo criado/escrito com sucesso!');
// });