const fs = require('fs');

/* GRAVAÇÃO 
fs.writeFile('./arquivo.json', '{"nome":"Adriano"}', (erro)=>{
    if(erro){
        return console.log('Ocorreu um erro ao criar');
    }
    console.log('Arquivo criado/escrito com sucesso!');
});
*/

/* LEITURA */
var dados = fs.readFileSync('./arquivo.json', 'utf-8');
console.log(dados);

/* EDITAR */
var arquivo = JSON.parse(dados);  // json -> js
console.log(arquivo);
var pessoas = arquivo.pessoas;
console.log(pessoas);
pessoas.push({ nome: "Juninho", idade: 13 });
console.log(pessoas);

//arquivo = JSON.stringify(pessoas);  // js -> json
arquivo = JSON.stringify({pessoas:pessoas});  // js -> json
fs.writeFile('./arquivo.json', arquivo, (erro) => {
    if (erro) {
        return console.log('Ocorreu um erro ao editar');
    }
    console.log('Arquivo editado com sucesso!');
})
