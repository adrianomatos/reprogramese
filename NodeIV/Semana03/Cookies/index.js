// npm install express cookie-parser
const express = require("express");
const app = express();

// COOKIE
var cookie = require("cookie-parser");
app.use(cookie());

// objeto usuário tipo json
let usuario2 = {
  nome: "Juninho",
  email: "jr@hotmail.com",
};

// ADICIONAR COOKIES
app.get("/adicionarUsuario", (req, res) => {
  // res.cookie("usuarioDados", usuario);
  res.cookie("usuarioDados2", usuario2, { expire: 60000 + Date.now() });
  res.send("Dados do usuário adicionados com sucesso!");
});

//LISTAR COOKIES
app.get("/usuarios", (req, res) => {
  // res.send(req.cookies); // - MOSTRAR todos os cookies
  // res.send(req.cookies.usuarioDados); // MOSTRAR cookie específico
  // res.send(req.cookies.usuarioDados3); // MOSTRAR cookie específico
  res.send(req.cookies.usuarioDados3.nome); // MOSTRAR DADOS de cookie específico
});

// EXCLUIR COOKIES
app.get("/logout", (req, res) => {
  // res.clearCookie(); // EXCLUI todos os cookies NÃO FUNCIONA
  // res.clearCookie("usuarioDados"); // Exclui cookie específico
  res.send("Usuário desconectado com sucesso!");
});

// HOME
app.get("/", (req, res) => {
  res.send("Bem vindo ao teste de cookies");
});

// SERVIDOR RODANDO
app.listen(3000, () => {
  console.log("Servidor rodando");
});
