var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var variavel_select = document.getElementById('select_animais')
// Selecionar elemento 'container' ( 1 ponto)
var variavel_container = document.getElementById('container')
// Selecionar elemento 'nome' ( 1 ponto)
var variavel_nome = document.getElementById('nome')

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
variavel_select.addEventListener('input', listarAnimais)
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
variavel_container.addEventListener('mouseover', mostrarNome)
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
variavel_container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  let animais;
  if (variavel_select.value == "dog") {
    animais = cachorros;
  }else {
    animais = gatos;
  }
  // Criar elementos do tipo <img src=./img/....
  for (animal of animais) {
    let novaDiv = document.createElement('div');
    novaDiv.innerHTML = `<img src=./img/${animal.imagem}.jpg id=${animal.nome}>`;
    document.querySelector('#container').appendChild(novaDiv);
  }
  // Fazer com que os elementos img sejam filhos do elemento 'container'
}

function mostrarNome(e) { // Implementação da função (4 pontos) 
  variavel_nome.innerText = e.target.id;
}

function limparNome() {
  variavel_nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}