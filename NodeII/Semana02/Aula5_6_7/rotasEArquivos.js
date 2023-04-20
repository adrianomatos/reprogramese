const express = require("express");
const app = express();
const porta = 443;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contato", function (req, res) {
  res.send("Contato");
  //res.json('kkkkkk');
});

app.get("/sobre", function (req, res) {
  res.send("Sobre");
});

app.listen(porta, function () {
  console.log("Servidor rodando!");
});
