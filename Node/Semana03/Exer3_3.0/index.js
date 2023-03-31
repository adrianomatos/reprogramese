/*
Sistema de cadastro de carros
Olá!

Nesta tarefa você deverá fazer um sistema em JavaScript, utilizando Node.js, que dê ao usuário 3 opções:

1 - Listar carros
2 - Cadastrar novo carro
3 - Sair do sistema

- Cada carro deve ter as seguintes características: Placa, Nome e Montadora.

- Você deve salvar os dados dos carros em um arquivo JSON.

- Para listar os carros cadastrados, você deve fazer a leitura desse mesmo arquivo.

- Para fazer a escrita e leitura do arquivo criado, use somente as funções assíncronas disponibilizadas pelo módulo fs (funções que não terminam com Sync)

Atenção!

Para as funcionalidades 1 e 2 do sistema, crie funções que retornam uma Promise. Você deve tratar o retorno dessas funções com o async/await.

Observe abaixo um exemplo do comportamento do sistema:
*/

const prompt = require('prompt-sync')();
const fs = require('fs');

console.clear();
var opcao = 0;
main();
async function main() {
    do {
        console.log("-----------------------------");
        console.log('Sistema de cadastro de carros');
        console.log('1 - Listar carros ');
        console.log('2 - Cadastrar novo carro ');
        console.log('3 - Sair do sistema ');
        console.log("-----------------------------");
        opcao = Number(prompt("Digite a opção desejada: "));

        if (opcao == 1) {
            await listarCarros();
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        else if (opcao == 2) {
            await incluirCarro();
            prompt("ENTER para prosseguir...");
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

async function listarCarros() {
    try {
        var listaDeCarros = await obterCarros();
        const dadosDoArquivo = JSON.parse(listaDeCarros);
        console.table(dadosDoArquivo.carros);
    } catch (error) {
        console.log('Erro ao exibir veículos.');
    }
}

async function incluirCarro() {
    var placa = prompt("Placa: ");
    var nome = prompt("Modelo: ");
    var montadora = prompt("Montadora: ");
    console.log("----------------------");
    var carro = { placa: placa, nome: nome, montadora: montadora };

    try {
        var carros = await obterCarros();
        var lista = JSON.parse(carros).carros;
        try {
            var dados = await adicionarCarro(lista, carro);
            // console.log('Arquivo editado com sucesso!');
            console.log(dados);
        } catch (error) {
            console.log('Ocorreu um erro ao inserir veículos.');
        }
    } catch (error) {
        console.log('Erro ao inserir veículos.');
    }
}

function obterCarros() {
    return new Promise((resolve, reject) => {
        fs.readFile('./arquivo.json', 'utf-8', (erro, dados) => {
            if (erro) {
                reject(erro);
            }
            resolve(dados);
        });
    });
}

function adicionarCarro(lista, carro) {
    lista.push(carro);
    var json = JSON.stringify({ carros: lista });

    return new Promise((resolve, reject) => {
        fs.writeFile('./arquivo.json', json, (erro) => {
            if (erro) {
                reject(erro);
            }
            resolve('Carro adicionado com sucesso!');
        });
    });
}


/*
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
    var placa = prompt("Placa: ");
    var nome = prompt("Modelo: ");
    var montadora = prompt("Montadora: ");
    console.log("----------------------");

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
*/