var senha = document.getElementById('senha');
var confSenha = document.getElementById('confSenha');

senha.addEventListener('input', validarSenhas);
confSenha.addEventListener('input', validarSenhas);

function validarSenhas(){
    if (senha.value != confSenha.value) {
        confSenha.setCustomValidity("As senhas são diferentes");
    } else {
        confSenha.setCustomValidity("");        
    }
}