const http = require("http");
const porta = 443;
const formidavel = require("formidable");
const fs = require("fs");

const servidor = http.createServer((req, res) => {
  if (req.url != "/enviodearquivo") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action ="enviodearquivo" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type = "file" name="filetoupload"><br>');
    res.write('<input type="submit" value="Enviar">');
    res.write("</form>");
    res.end();
  } else {
    const form = new formidavel.IncomingForm();
    form.parse(req, (erro, campos, arquivos) => {
      urlOrigem = arquivos.filetoupload.filepath;
      urlDestino = "./enviodearquivo/" + arquivos.filetoupload.originalFilename;
      var rawData = fs.readFileSync(urlOrigem);

      fs.writeFile(urlDestino, rawData, function (err) {
        if (err) {
          console.log("Ocorreu um erro: "+err);
        }
        res.write("Arquivo enviado com sucesso");
        res.end();
      });
    });
  }
});

// Msg OK
servidor.listen(porta, () => {
  console.log("Servidor rodando!");
});
