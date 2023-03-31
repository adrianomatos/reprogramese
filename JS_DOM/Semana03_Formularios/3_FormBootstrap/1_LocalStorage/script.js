const contato1 = {
    nome: "Adriano",
    fone: "(88) 98193-5976",
    email: "adrianotaua@hotmail.com"
}

const contato2 = {
    nome: "Rebeca",
    fone: "(88) 93306-4567",
    email: "rebsrode@gmail.com"
}

const bd_contatos = [contato1, contato2];

localStorage.setItem('bd_contatos', JSON.stringify(bd_contatos));

const contatos = JSON.parse(localStorage.getItem('bd_contatos'));

for (let c of contatos) {
    document.write(c.nome + "</br>");
    document.write(c.fone + "</br>");
    document.write(c.email + "</br></br>");
}




// ***********************************************************
// CRIAÇÃO do objeto
// const contato = {
//     nome: "Adriano",
//     fone: "(88) 98193-5976",
//     email: "adrianotaua@hotmail.com"
// }

// GRAVAÇÃO do objeto em JSON
// localStorage.setItem('agenda', JSON.stringify(contato));

// LEITURA(conversão) do objeto em JSON
// const variavel = JSON.parse(localStorage.getItem('agenda'));

// IMPRESSÃO do objeto
// document.write(variavel.nome + "</br>");
// document.write(variavel.fone + "</br>");
// document.write(variavel.email);
// ***********************************************************


// GRAVAÇÃO
// localStorage.setItem('nome', 'Adriano');
// localStorage.setItem('fone', '(88) 98193-5976');
// localStorage.setItem('email', 'adrianotaua@hotmail.com');

// LEITURA
// const nome = localStorage.getItem('nome');
// const fone = localStorage.getItem('fone');
// const email = localStorage.getItem('email');

// IMPRESSÃO
// document.write('Nome: '+nome);
// document.write('</br>Telefone: '+fone);
// document.write('</br>E-mail: '+email);