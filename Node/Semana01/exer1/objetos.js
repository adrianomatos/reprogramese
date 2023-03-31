const prompt = require('prompt-sync')();
var array_notebook = [];

do {
    console.log("SISTEMA DE CADASTRO DE NOTEBOOKS");
    console.log("1 - Inserir Notebook");
    console.log("2 - Excluir Notebook");
    console.log("3 - Listar Notebook");
    console.log("0 - Sair");

    var opcao = prompt("Digite sua opção: ");

    // Função INSERIR
    if (opcao == 1) {
        console.log("\n\nInserindo Notebook...\n");
        let codigo = parseInt(prompt("Digite o código: "));
        let marca = prompt("Digite a marca: ");
        let tela = prompt("Digite o tamanho da tela: ");
        let hd = prompt("Digite o tamanho do HD: ");
        let memoria = prompt("Digite o tamanho da memoria RAM: ");

        // Neste trecho estamos declarando um objeto
        const notebook = {
            codigo: codigo,
            marca: marca,
            tela: tela,
            hd: hd,
            memoria: memoria
        }
        inserir_notebook(notebook);
    }

    // Função EXCLUIR
    else if (opcao == 2) {
        console.log("\n\nExcluindo Notebook...\n");
        let codigo = prompt("Digite o código do notebook: ");
        excluir_notebook(codigo);//Seu erro está neste ponto!
    }

    // Função LISTAR
    else if (opcao == 3) {
        console.log("\n\nListando Notebooks...\n");
        listar_notebooks();
    }

    // SAIR
    else {
        console.log("\n\nSaindo do programa...\n");
    }

    prompt("\nEnter para continuar...");
    console.clear();
} while (opcao != 0)


// INSERIR
function inserir_notebook(notebook) {
    array_notebook.push(notebook);
    console.log("\n\nNotebook inserido com sucesso!");
}


// EXCLUIR
function excluir_notebook(codigo) {
    for (let index = 0; index < array_notebook.length; index++) {
        let item = array_notebook[index];
        if (item.codigo == codigo) {
            array_notebook.splice(item, 1);
            console.log("Notebook removido com sucesso!");
        }
    }
}


// LISTAR
function listar_notebooks() {
    for (let index = 0; index < array_notebook.length; index++) {
        let item = array_notebook[index];
        console.log("Codigo: " + item.codigo +
            ", marca: " + item.marca +
            ", tela: " + item.tela +
            ", hd: " + item.hd +
            ", memoria: " + item.memoria);
    }
}



// a) a maior nota e o nome do aluno que a tirou
// b) a menor nota e o nome do aluno que a tirou
// c) a média de todas as notas
// d) a quantidade de alunos aprovados(nota maior ou igual a 60)
// e) a quantidade de alunos reprovados(nota menor que 60)

//Todas as funções e cálculos do exercício devem estar em um arquivo separado do index.js e você deverá importá-lo para o seu arquivo principal para utilizar as funções.


