const axios = require('./api.js');

// carregarEstados();
async function carregarEstados() {  // GET
    try {
        var response = await axios.api.get('/estados/')
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao buscar estados!')
    }
}

// cadastrarEstado();
async function cadastrarEstado() {  // POST
    try {
        var response = await axios.api.post('/estados/',{
            id: 'MA',
            nome: 'Maranhão'
        });
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao cadastrar estado!')
    }
}

// alterarEstado();
async function alterarEstado() {     //PUT
    try {
        var response = await axios.api.put('/estados/SP', {
            id: 'SP',
            nome: 'São Paulo'
        });
        console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao alterar estado!')
    }
}

// deletarEstado();
async function deletarEstado() {    // DEL
    try {
        var response = await axios.api.delete('/estados/MA');
        // console.log(response.data);
    } catch (error) {
        console.log('Ocorreu erro ao cadastrar estado!')
    }
}