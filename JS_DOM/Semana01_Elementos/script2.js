// Selecionar todos elementos da classe 'produto_preco'
var array_produto_preco = document.getElementsByClassName("produto_preco");

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
var total = 0;
for (let index = 0; index < array_produto_preco.length; index++) {
    total = total + parseFloat(array_produto_preco[index].innerText);
}

// Escrever no conteúdo da página o valor da soma
document.write("TOTAL: " + total);