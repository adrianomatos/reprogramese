(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    form.classList.add('was-validated')
                } else {
                    inserir()
                    form.classList.remove('was-validated')
                    form.reset()
                }
                event.preventDefault()
                event.stopPropagation()
            }, false)
        })
})()


function getLocalStorage() {
    return JSON.parse(localStorage.getItem('bd_games')) ?? [];
}

function setLocalStorage(bd_games) {
    localStorage.setItem('bd_games', JSON.stringify(bd_games));
}

function limparTabela() {
    var elemento = document.querySelector("#tabela>tbody");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
    limparTabela();
    const bd_games = getLocalStorage();
    let index = 0;
    for (game of bd_games) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${game.nome}</td>
        <td>${game.genero}</td>
        <td>${game.distribuidor}</td>
        <td>${game.plataforma}</td>
        <td>${game.modo}</td>
        <td>${game.idioma}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
        document.querySelector('#tabela>tbody').appendChild(novaLinha)
        index++;
    }
}

function inserir() { // Adaptação da função inserir (10 pontos)
    const game = {
        nome: document.getElementById('nome').value,
        genero: document.getElementById('genero').value,
        distribuidor: document.getElementById('distribuidor').value,
        plataforma: document.getElementById('plataforma').value,
        modo: document.getElementById('modo').value,
        idioma: document.getElementById('idioma').value
    }
    const bd_games = getLocalStorage();
    bd_games.push(game);
    setLocalStorage(bd_games);
    atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
    const bd_games = getLocalStorage();
    bd_games.splice(index, 1);
    setLocalStorage(bd_games);
    atualizarTabela();
}

function validarNomeJogo() { // Adaptação da função validar (10 pontos)
    const bd_games = getLocalStorage();
    for (game of bd_games) {
        if (nomeJogo.value == game.nome) {
            nomeJogo.setCustomValidity("Este Jogo já existe!");
            feedbackNomeGame.innerText = "Este Jogo já existe!";
            return false;
        } else {
            nomeJogo.setCustomValidity("");
            feedbackNomeGame.innerText = "Informe o nome do Jogo corretamente..";
        }
    }
    return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const nomeJogo = document.getElementById("nome");
const feedbackNomeGame = document.getElementById("feedbackNomeGame");
nomeJogo.addEventListener('input', validarNomeJogo);