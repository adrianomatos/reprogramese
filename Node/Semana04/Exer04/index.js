const prompt = require('prompt-sync')();
const axios = require('./api.js');

console.clear();
var opcao = 100;
main();

async function main() {
    do {
        console.log("-----------------------------");
        console.log('Sistema de gerenciamento de tarefas');
        console.log('1 - Cadastrar nova tarefa');
        console.log('2 - Alterar uma tarefa');
        console.log('3 - Marcar tarefa como concluída');
        console.log('4 - Excluir uma tarefa');
        console.log('5 - Listar tarefas pendentes');
        console.log('6 - Listar tarefas concluídas');
        console.log('0 - Sair do sistema ');
        console.log("-----------------------------");
        opcao = Number(prompt("Digite a opção desejada: "));

        if (opcao == 1) {
            let id = Number(prompt("Digite o ID da tarefa:"));
            let descricao = prompt("Digite a descrição da tarefa:");
            await cadastrarTarefa(id, descricao);
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        else if (opcao == 2) {
            let id = Number(prompt("Digite o ID da tarefa que será alterada:"));
            let descricao = prompt("Digite a nova descrição para a  tarefa:");
            await alterarTarefa(id, descricao);
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        else if (opcao == 3) {
            let id = Number(prompt("Digite o ID da tarefa que será concluída:"));
            await concluirTarefa(id);
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        else if (opcao == 4) {
            let id = Number(prompt("Digite o ID da tarefa que será excluída:"));
            // AJUSTAR PARA MANTER DESCRIÇÃO
            await deletarTarefa(id);
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        else if (opcao == 5) {
            await listarTarefasPendentes();
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        else if (opcao == 6) {
            await listarTarefasFinalizadas();
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        // Opção oculta - Reabrir tarefas
        else if (opcao == 8) {
            let id = Number(prompt("Digite o ID da tarefa que será reaberta:"));
            await reabrirTarefa(id);
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        // Opção oculta - Mostrar todos
        else if (opcao == 9) {
            await carregarTarefas();
            prompt("ENTER para prosseguir...");
            console.clear();
        }

        else if (opcao == 0) {
            console.clear();
            console.log("Programa finalizado");
        }

        else {
            console.log("OPÇÃO INVÁLIDA.");
            prompt("ENTER para prosseguir...")
            console.clear();
        }

    } while (opcao != 0);
}

async function cadastrarTarefa(id, descricao) {  // POST
    try {
        var response = await axios.api.post('/tarefas/', {
            id: `${id}`,
            descricao: `${descricao}`,
            status: 'Pendente'
        });
        console.log('Tarefa cadastrada com sucesso!');
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao cadastrar tarefa: ', error.message);
    }
}

async function alterarTarefa(id, descricao) {     //PUT
    try {
        var response = await axios.api.put(`/tarefas/${id}`, {
            id: `${id}`,
            descricao: `${descricao}`,
            // Deixar PUT pois só pode alterar tarefas pendentes, se alterar uma tarefa concluída ela voltará a ser pendente
            status: 'Pendente'
        });
        console.log('Tarefa alterada com sucesso!');
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao alterar tarefa: ', error.message)
    }
}

// funciona ok
// async function concluirTarefa(id) {  // patch 
//     try {
//         // PUT - ALTERA O OBJETO COMPLETO
//         // PATCH - ALTERA SOMENTE O ÍTEM
//         // var response = await axios.api.put(`/tarefas/${id}`, {
//         var response = await axios.api.patch(`/tarefas/${id}`, {
//             id: `${id}`,
//             status: 'Concluída'
//         });
//         console.log('Tarefa concluída com sucesso!');
//         console.log(response.data);
//     } catch (error) {
//         console.log('Ocorreu erro ao alterar status tarefa: ', error.message)
//     }
// }

// opção com put fazendo busca antes de alteração
async function concluirTarefa(id) {  // PUT
    var tarefa = await obterTarefa(id);
    
    try {
        var response = await axios.api.put(`/tarefas/${id}`, {
            id: `${id}`,
            descricao: tarefa.descricao, //Preenche com próprio conteúdo
            status: 'Concluída'
        });
        console.log('Tarefa concluída com sucesso!');
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao alterar status tarefa: ', error.message)
    }
}
async function obterTarefa(id) {
    var response = await axios.api.get(`/tarefas/${id}`);
    var tarefa = response.data;
    return tarefa;
}

async function reabrirTarefa(id) {  // patch
    try {
        var response = await axios.api.patch(`/tarefas/${id}`, {
            id: `${id}`,
            status: 'Pendente'
        });
        console.log('Tarefa reaberta com sucesso!');
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao alterar status tarefa: ', error.message)
    }
}

async function deletarTarefa(id) {    // DEL
    try {
        // var response = 
        await axios.api.delete(`/tarefas/${id}`);
        console.log('Tarefa excluída com sucesso!');
        // console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao deletar tarefa: ', error.message)
    }
}

async function listarTarefasPendentes() {  // GET
    try {
        var response = await axios.api.get(`/tarefas/`);
        var lista = response.data.filter((item) => item.status === 'Pendente');

        console.log('Busca concluída com sucesso!');
        console.table(lista);
    } catch (error) {
        console.log('Ocorreu erro ao buscar tarefas: ', error.message)
    }
}

async function listarTarefasFinalizadas() {  // GET
    try {
        var response = await axios.api.get(`/tarefas/`);
        var lista = response.data.filter((item) => item.status === 'Concluída');

        console.log('Busca concluída com sucesso!');
        console.table(lista);
    } catch (error) {
        console.log('Ocorreu erro ao buscar tarefas: ', error.message)
    }
}

async function carregarTarefas() {  // GET
    try {
        var response = await axios.api.get('/tarefas/');
        console.log('Busca concluída com sucesso!');
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao buscar tarefas: ', error.message)
    }
}

