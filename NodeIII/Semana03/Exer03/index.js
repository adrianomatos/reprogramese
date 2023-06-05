// Criando a estrutura da aplicação e o sincronismo com o banco e a tabela

// Bibliotecas e arquivos
const database = require("./db");
const Fornecedor = require("./models/fornecedor");

// Criando servidor
const express = require("express");
const app = express();
const porta = 9443;
const bodyParser = require("body-parser");

// Setar valores da VIEW E ENGINE
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Definindo rotas
app.get("/", (req, res) => {
  res.send("Bem vindo ao cadastro de fornecedores.");
});

// Exibir formulário de cadastro
app.get("/cadfornecedor", function(req, res) {
  res.render("formFornecedor");
});

// "FUNÇÃO" Adicionar fornecedor
app.post("/addfornecedor", function(req, res) {
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
  }).then(function() {
    res.send("Fornecedor cadastrado com sucesso");
  });
});

// Status servidor
app.listen(porta, () => {
  console.log("Servidor rodando");
});

(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);
    const fornecedores = await Fornecedor.findAll();
    console.log("Lista de fornecedores \n", fornecedores);
  } catch (error) {
    console.log(error);
  }
})();
