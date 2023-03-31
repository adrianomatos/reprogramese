// Definindo uma função como async , podemos utilizar a palavra-chave await  antes de qualquer expressão que retorne uma Promise .
// O async/await surgiu como uma opção mais "legível" ao .then(), entretanto, é possível usar os dois métodos em um mesmo código.
// As palavras-chave async e await são uma sintaxe que simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código.

function cadastrarUsuario() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            // Lógica para cadastrar usuário
            
            var erro = true;

            if (!erro) {
                resolve({ time: 5, message: 'Sucesso!' });
            } else {
                reject();
            }
        }, 2000)
    });
}


async function main() {
    try {
        var dados = await cadastrarUsuario();
        console.log(dados);
    } catch (erro) {
        console.log('Ocorreu um erro ao registrar o usuário');
    }
}

main();