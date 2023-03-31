
var btn = document.getElementById('btnCalcular');
btn.addEventListener('click', calcular);

var resultadoIMC = document.getElementById('divIMC');

function calcular() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var imc = peso / (altura * altura);


    // resultadoIMC.innerText='O IMC é: '+imc;
    // resultadoIMC.innerText = 'O IMC é: ' + imc.toFixed(2);
    // resultadoIMC.innerHTML = 'O IMC é: <strong>${imc.toFixed(2)}</strong>';
    resultadoIMC.innerHTML = 'O IMC é: <strong>'+imc.toFixed(2)+'</strong>';

    // if (imc >= 30) {
    //     document.write("Você está gordinho heim!");
    // } else {
    //     ...
    // }
}