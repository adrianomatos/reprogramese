const prompt = require('prompt-sync')();
// const funcoes = require("./funcoes");
// const asyncAwait = require("./asyncAwait");
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


while (sair) {

    menu();

    if (opcao == 1) {
        // asyncAwait.main();
        function listarVeiculos() {
            return new Promise((resolve, reject) => {
                // EXIBIR
                fs.readFile('./arquivo.json', 'utf-8', (erro, dados) => {

                    if (erro) {
                        console.log('Ocorreu um erro ao ler o arquivo');
                        reject(erro);
                    } else {
                        // console.log(dados);              // json
                        const arquivo = JSON.parse(dados);  // json -> OBJETO js
                        // console.log(arquivo);               // OBJETO js
                        // console.log(arquivo.veiculos);
                        // console.log(arquivo.veiculos[0]);
                        // console.log(arquivo.veiculos[0].nome);
                        // resolve('Sucesso!');
                        resolve(arquivo);
                    }
                });
            });
        }

        async function main() {
            try {
                var dados = await listarVeiculos();
                console.log(dados);
            } catch (erro) {
                console.log('Erro ao exibir veículos.');
            }
        }

        main();
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
}

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