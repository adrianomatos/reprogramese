// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

var senha = document.getElementById('senha');
var confSenha = document.getElementById('confSenha');
var feedbackConfSenha = document.getElementById('feedbackConfSenha');

senha.addEventListener('input', validarSenhas);
confSenha.addEventListener('input', validarSenhas);

function validarSenhas() {
    if (senha.value != confSenha.value) {
        confSenha.setCustomValidity("As senhas são diferentes");
        feedbackConfSenha.innerText = "As senhas são diferentes";
    } else {
        confSenha.setCustomValidity("");
    }
}