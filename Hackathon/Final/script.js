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