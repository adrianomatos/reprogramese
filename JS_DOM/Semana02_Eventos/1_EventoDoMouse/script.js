// CLICAR
var btn1 = document.getElementById('area1')
btn1.addEventListener('mousedown', mDown);
btn1.addEventListener('mouseup', mUp);

function mDown(){
    btn1.style.background = 'gray';
    btn1.style.color = 'white';
    btn1.innerHTML = 'Solte-me'
}

function mUp(){
    btn1.style.background = 'red';
    btn1.style.color = 'black';
    btn1.innerHTML = 'Clique-me'
}

// APONTAR
var btn2 = document.getElementById('area2');
btn2.addEventListener('mouseover', mOver);
btn2.addEventListener('mouseout', mOut);

function mOver(){
    btn2.style.color = 'white';
    btn2.style.background = 'green';
    btn2.innerHTML = 'Retire o mouse'
}

function mOut(){
    btn2.style.color = 'black';
    btn2.style.background = 'blue';
    btn2.innerHTML = 'Aponte o mouse';
}