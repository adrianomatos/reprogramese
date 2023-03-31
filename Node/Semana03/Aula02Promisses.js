/*
Escolha a palavra que se associa ao estado de uma Promise dentre as alternativas apresentadas:

Pendente → Pending, 
Estabelecida → Settled, 
Resolvida → Resolved, 
Rejeitada → Rejected, 
Realizada → Fulfilled.
*/
function cadastrarUsuario() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            // Lógica para cadastrar usuário

            var erro = false;    // Teste 

            if (!erro) {
                resolve('Sucesso!');
                // resolve({ time: 5, message: 'Sucesso!' });
            } else {
                // reject('Ocorreu um erro');
                reject();
            }
        }, 2000)
    });
}

cadastrarUsuario()
    .then((dados) => {   //Resolve
        console.log(dados);
        // console.log(dados.time);
        // console.log(dados.message);
    })
    .catch((dados) => {  // reject
        // console.log(dados);
        console.log('Ocorreu um erro ao registrar o usuário');
    });

