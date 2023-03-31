const prompt = require('prompt-sync')();
const { Console } = require('console');
const fs = require('fs');

var opcao = 0;
main();
async function main() {
    do {
        console.log("------------------------------------------");
        console.log('Sistema de cadastro de carros');
        console.log('1 - Listar carros ');
        console.log('2 - Cadastrar novo carro ');
        console.log('3 - Sair do sistema ');
        console.log("------------------------------------------");
        opcao = Number(prompt("Digite a opção desejada: "));

        if (opcao == 1) {
            await exibirVeiculos();
            prompt("ENTER para prosseguir...")
            console.clear();
        }

        else if (opcao == 2) {
            cadastrarVeiculos();
            prompt("ENTER para prosseguir...")
            console.clear();
        }

        else if (opcao == 3) {
            console.clear();
            console.log("Programa finalizado");
        }

        else {
            console.log("OPÇÃO INVÁLIDA.");
            prompt("ENTER para prosseguir...")
            console.clear();
        }

    } while (opcao != 3);
}


function exibirVeiculos() {
    return new Promise((resolve, reject) => {
        fs.readFile('./arquivo.json', 'utf-8', (erro, dados) => {
            if (erro) {
                reject(erro);
            } else {
                // console.log(dados);              // json
                const arquivo = JSON.parse(dados);  // json -> OBJETO js
                // console.log(arquivo);               // OBJETO js
                console.log(arquivo.veiculos);
                // console.log(arquivo.veiculos[0]);
                // console.log(arquivo.veiculos[0].nome);
                // resolve('Sucesso!');
                // resolve(arquivo);
                resolve(dados);
            }
        });

        try {
            console.log(arquivo);
        } catch (error) {
            return console.log('Ocorreu um erro ao conectar arquivo');
        }
    });
}

function cadastrarVeiculos() {
    var placa = prompt("Digite a placa do carro: ");
    var nome = prompt("Digite o nome do modelo do carro: ");
    var montadora = prompt("Digite o nome da montadora do carro: ");
    console.log("------------------------------------------");

    return new Promise((resolve, reject) => {

        var dados = fs.readFile('./arquivo.json', 'utf-8', (erro, data) => {

            if (erro) {
                reject(erro);
            }

            console.log('Arquivo criado/escrito com sucesso!');
            resolve(dados);
        });

        console.log(dados);                 // json
        var arquivo = JSON.parse(dados); // json -> objeto js
        console.log(arquivo);            // objeto js
        var veiculos = arquivo.veiculos;
        console.log(veiculos);
        veiculos.push({ placa: `${placa}`, nome: `${nome}`, montadora: `${montadora}` });
        console.log(veiculos);

        // Salvar no arquivo
        // arquivo = JSON.stringify(veiculos);                 // js -> json
        arquivo = JSON.stringify({ veiculos: veiculos });     // js -> json
        fs.writeFile('./arquivo.json', arquivo, (erro) => {
            if (erro) {
                return console.log('Ocorreu um erro ao editar');
            }
            console.log('Arquivo editado com sucesso!');
        });

        try {
            console.log(dados);
            console.log('Arquivo editado com sucesso!');
        } catch (error) {
            return console.log('Ocorreu um erro ao conectar arquivo');
        }
    });
}
