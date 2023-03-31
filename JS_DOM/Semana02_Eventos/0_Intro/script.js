var b2 = document.getElementById('btn2');
b2.onclick = function () { alert('Botão 2 Pressionado'); }

var b3 = document.getElementById('btn3');
b3.addEventListener("click", function () { alert("addEventListener"); }, false);

// EVENTO INLINE
function acessibilidade() {
    document.body.style.background = 'gray';
}

// EVENTO LISTENER
var corBranca = document.getElementById('corNormal');
corBranca.addEventListener('click', branca);
function branca() {
    document.body.style.background = 'white';
}

var corVerde = document.getElementsByTagName('p')
corVerde.addEventListener('click', verde);
function verde(evento) {
    evento.target.style.background = 'green';
}

var botaoNovo = document.getElementById('criar');
botaoNovo.addEventListener('click', criar);
function criar() {
    var p = document.createElement('p');
    p.className = 'quadrado';
    p.style.background = 'red';
    container.appendChild(p);
}