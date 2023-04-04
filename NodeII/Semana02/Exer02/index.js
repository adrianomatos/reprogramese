const express = require("express");
const app = express();
const porta = 443;

// Arquivos estáticos
app.use(express.static(__dirname + "/arquivos"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/produtos", function (req, res) {
  res.sendFile(__dirname + "/produtos.html");
});

app.listen(porta, function () {
  console.log("Servidor rodando");
});
