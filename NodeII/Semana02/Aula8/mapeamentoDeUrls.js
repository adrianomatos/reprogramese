const http = require("http");
const porta = 443;

// Servidor Web
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url == "/") {
    res.write("<h1>Olá createServer</h1>");
  } 
  else if (req.url == "/server") {
    res.write("<h1>Olá Servidor</h1>");
  } 
  else if (req.url == "/server/node") {
    res.write("<h1>Olá Node</h1>");
  } 
  else {
    res.write("<h1>Página não encontrada!</h1>");
  }
  res.end();
});

// Msg OK
servidor.listen(porta, () => {
  console.log("Servidor rodando!");
});
