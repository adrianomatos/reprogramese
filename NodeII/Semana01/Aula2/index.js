const http = require("http");
const porta = 443;

// criação do Servidor Web
const servidor = http.createServer((req, res) => {
  // Impressão no browser
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Servidor node rodando");
  res.end();
});

// Msg de sucesso
servidor.listen(porta, () => {
  console.log("Servidor node rodando");
});
