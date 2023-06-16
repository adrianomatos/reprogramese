// npm install express cookie-parser
const express = require("express");
const app = express();

// COOKIE
var cookie = require("cookie-parser");
app.use(cookie());

// objeto usuário tipo json----------------------------------
let usuario1 = {
  nome: "Adriano Júnior",
  apelido: "Juninho",
  idade: "14",
  cidade: "Tauá",
};
let usuario2 = {
  nome: "Adriano Júnior",
  apelido: "Juninho",
  idade: "14",
  cidade: "Tauá",
};
let usuario3 = {
  nome: "Adriano Júnior",
  apelido: "Juninho",
  idade: "14",
  cidade: "Tauá",
};

// ADICIONAR COOKIES----------------------------------
app.get("/adicionarUsuario", (req, res) => {
  res.cookie("usuarioDados1", usuario1);
  res.cookie("usuarioDados2", usuario2);
  res.cookie("usuarioDados3", usuario3);
  res.send("Dados do usuário adicionados com sucesso!");
});

//LISTAR COOKIES----------------------------------
app.get("/usuarios", (req, res) => {
  res.send(req.cookies); // - MOSTRAR todos os cookies
});

// EXCLUIR COOKIES
app.get("/logout", (req, res) => {
  res.clearCookie("usuarioDados1"); // Exclui cookie específico
  //res.clearCookie("usuarioDados2"); // Exclui cookie específico
  //res.clearCookie("usuarioDados3"); // Exclui cookie específico
  res.send("Usuário usuarioDados1 desconectado com sucesso!");
});

// HOME
app.get("/", (req, res) => {
  res.send("Bem vindo ao teste de cookies");
});

// SERVIDOR RODANDO
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
