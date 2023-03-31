let roupas = [
    { produto: "Camisa", preco: "25", cor: "Amarelo" },
    { produto: "Calça", preco: "45", cor: "Azul" },
    { produto: "Short", preco: "35", cor: "Preto" },
    { produto: "Meia", preco: "5", cor: "Branca" },
    { produto: "Tênis", preco: "55", cor: "Vermelho" },
];

// let precoMaiorQue30 = roupas.filter(
//     function (roupa) {
//         return roupa.preco >= 30;
//     }
// );

// ou
// let precoMaiorQue30 = roupas.filter((roupa) => {
//     return roupa.preco >= 30;
// });

let precoMaiorQue30 = roupas.filter((roupa) => roupa.preco >= 30);

console.log(precoMaiorQue30);

console.log("--------------------------------------------------------------");

setTimeout(()=>{
    console.log("Deu tempo!")
}, 1000);

