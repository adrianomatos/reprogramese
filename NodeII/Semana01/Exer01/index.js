const http = require("http");
const fs = require("fs");
const porta = 443;
const readLine = require("readline");

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

// leitura de arquivo
async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    console.log(line);
  }
}

readFileByLine("teste.txt");
