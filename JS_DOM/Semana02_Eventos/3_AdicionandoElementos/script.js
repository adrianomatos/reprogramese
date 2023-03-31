
var btn = document.getElementById('btnAdicionar');
btn.addEventListener('click', adicionarLinha);

function adicionarLinha() {
    // 0 a 1 multiplicado por 100 e depois +1 caso ZERO
    const num = parseInt(Math.random() * (100) + 1);
    
    // Cria linha
    const novaLinha = document.createElement('tr');

    // Coloca valor dentro da linha 
    //novaLinha.innerHTML = '<td>${num}</td>';
    novaLinha.innerHTML = '<td>' + num + '</td>';

    // Adicionar linha dentro da tabela 
    //document.getElementById('tabela').appendChild(novaLinha); OU
    document.querySelector('#tabela').appendChild(novaLinha);
}