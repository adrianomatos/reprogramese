// document.write('Olá Mundo');
// document.write(Date());
// document.write(document.title);
// document.write(document.characterSet);

var corpo = document.body;
// altera body
corpo.style.background = 'gray';

// sobrescreve titulo
document.title = 'JS é fodão!';
// document.write(document.title);

// Altera conteúdo
var h1_brasil = document.getElementById("pais_brasil");
h1_brasil.style.background = 'red';
h1_brasil.style.color = 'blue';

// Mostra conteúdo
// document.write(h1_brasil.innerText);

// Mostra conteúdo com html(formatado)
// document.write(h1_brasil.innerHTML);
// alert(h1_brasil.innerHTML)
// alert(h1_brasil.innerText)

// seleciona todos elementos H2 e salva no ARRAY_H2
var array_h2 = document.getElementsByTagName("h2");
var h2_es = array_h2[0];
var h2_mg = array_h2[1];

h2_es.style.background = 'pink';
h2_mg.style.color = 'green';

var array_cidade = document.getElementsByName("cidade")
var cidade_0 = array_cidade[0];
cidade_0.style.background = "red";

var array_cidade_mg = document.getElementsByClassName("cidade-mg")
var cidade_mg_1 = array_cidade_mg[1];
cidade_mg_1.style.color = 'blue';

// pega 1º elemento
var pais = document.querySelector("#pais_brasil");
pais.style.textAlign = "center";

// pega 1º elemento
var cidades = document.querySelector(".cidade-mg");
cidades.style.color = "yellow";
