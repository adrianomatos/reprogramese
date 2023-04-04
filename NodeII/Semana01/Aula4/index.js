const http = require("http");
const fs = require("fs");
const porta = 443;

// criação do Servidor Web
const servidor = http.createServer((req, res) => {
  // Edição de arquivo externo
  fs.appendFile("log.txt", "Frase criada pelo appendFile", (err) => {
    if (err) throw err;
    console.log("Arquivo criado!");
    res.end();
    // if (err) {
    //     console.log("Deu ruim");
    // } else {
    //     console.log('Arquivo criado');
    //     res.end();
    // }
  });
});

// Msg de sucesso
servidor.listen(porta, () => {
  console.log("Servidor rodando");
});
