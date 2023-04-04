const http = require("http");
const fs = require("fs");
const porta = 443;

// criação do Servidor Web
const servidor = http.createServer((req, res) => {
  // Carregamento de arquivo HTML
  fs.readFile("index.html", (err, arquivo) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(arquivo);
    res.end();
  });
});

// Msg de sucesso
servidor.listen(porta, () => {
  console.log("Servidor node rodando");
});
