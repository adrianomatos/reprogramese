const prompt = require('prompt-sync')();
const fs = require('fs');

// EXIBIR
exports.exibir = function exibir() {
    fs.readFile('./arquivo.json', 'utf-8', (erro, dados) => {
        if (erro) {
            console.log('Ocorreu um erro ao ler o arquivo');
        } else {
            // console.log(dados);              // json
            const arquivo = JSON.parse(dados);  // json -> OBJETO js
            console.log(arquivo);               // OBJETO js
            // console.log(arquivo.veiculos);
            // console.log(arquivo.veiculos[0]);
            // console.log(arquivo.veiculos[0].nome);
        }
    });
}


// EDITAR
exports.editar = function editar() {
    var placa = prompt("Digite a placa do carro: ");
    var nome = prompt("Digite o nome do modelo do carro: ");
    var montadora = prompt("Digite o nome da montadora do carro: ");
    console.log("------------------------------------------");

    // Preparar dados
    var dados = fs.readFileSync('./arquivo.json', 'utf-8', (erro) => {
        if (erro) {
            return console.log('Ocorreu um erro ao criar');
        }
        console.log('Arquivo criado/escrito com sucesso!');
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
        // console.log('Arquivo editado com sucesso!');
    });
}