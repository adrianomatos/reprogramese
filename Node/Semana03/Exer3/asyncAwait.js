const funcoes = require("./funcoes");
const prompt = require('prompt-sync')();
const fs = require('fs');

function listarVeiculos() {
    return new Promise((resolve, reject) => {
        // exibir();

        // EXIBIR
        // function exibir() {
        fs.readFile('./arquivo.json', 'utf-8', (erro, dados) => {
            if (erro) {
                console.log('Ocorreu um erro ao ler o arquivo');
                reject();
            } else {
                // console.log(dados);              // json
                const arquivo = JSON.parse(dados);  // json -> OBJETO js
                console.log(arquivo);               // OBJETO js
                // console.log(arquivo.veiculos);
                // console.log(arquivo.veiculos[0]);
                // console.log(arquivo.veiculos[0].nome);
                // resolve('Sucesso!');
                resolve(arquivo);
            }
        });
        // }
    });
}

exports.main = async function main() {
    try {
        var dados = await listarVeiculos();
        console.log(dados);
    } catch (erro) {
        console.log('Erro ao exibir veículos.');
    }
}

