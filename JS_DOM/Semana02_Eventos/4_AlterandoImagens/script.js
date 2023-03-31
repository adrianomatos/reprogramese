
const btnTodos = document.getElementById('imgTecnologia');
const btnHtml = document.getElementById('btnHtml');
const btnCss = document.getElementById('btnCss');
const btnJs = document.getElementById('btnJs');

btnTodos.addEventListener('click', mostrarImagemTodos);
btnHtml.addEventListener('click', mostrarImagemHtml);
btnCss.addEventListener('click', mostrarImagemCss);
btnJs.addEventListener('click', mostrarImagemJs);

function mostrarImagemTodos(){
    imgTecnologia.src = './img/htmlCssJs.png';
}
function mostrarImagemHtml(){
    imgTecnologia.src = './img/html.png';
}
function mostrarImagemCss(){
    imgTecnologia.src = './img/css.png';
}
function mostrarImagemJs(){
    imgTecnologia.src = './img/js.png';
}