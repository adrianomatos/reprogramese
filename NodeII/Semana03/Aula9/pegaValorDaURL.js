const http = require("http");
const porta = 443;
const url = require("url");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // Pega valor da URL
  res.write(req.url + "<br/>");

  // URL repassada: http://localhost:443/?nome=Adriano&sobrenome=Matos&cidade=Taua
  const parametroUrl = url.parse(req.url, true).query;
  res.write("<br/>" + parametroUrl.nome);
  res.write("<br/>" + parametroUrl.sobrenome);
  res.write("<br/>" + parametroUrl.cidade);

  res.end();
});

// Msg OK
servidor.listen(porta, () => {
  console.log("Servidor rodando!");
});
