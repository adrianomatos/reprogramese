// npm install express
const express = require("express");
const app = express();
// Identificar comandos HTML com codificação para JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = require("./db/db");
const Funcionario = require("./model/funcionarioModel");
const funcionarioController = require("./controller/funcionarioController");
const clienteController = require("./controller/clienteController");

// Sincronisco com Banco de dados
try {
  database.sync().then(() => {
    app.listen(9443, () => {
      console.log("Servidor rodando");
    });
  });
} catch (error) {
  console.log("Falha ao sincronizar com o banco de dados. \n", error);
}

// --------- ROTAS FUNCIONARIO ---------
// PRINCIPAL
app.get("/", (req, res) => {
  // return res.send("Olá mundo!");
  return res.json({ message: "Bem vindo à nossa API" }); // Em JSON
});

// POST - CREATE/CADASTRAR
app.post("/Cadastrar", funcionarioController.FuncionarioCreate);

// GET - READ/LISTAR (com ou sem id)
app.get("/Funcionarios/:id?", funcionarioController.FuncionarioListar);

// PUT - UPDATE/ALTERAR
app.put("/Funcionarios/:id", funcionarioController.FuncionarioUpdate);

// DELETE - EXCLUIR
app.delete("/Funcionarios/:id", funcionarioController.FuncionarioDelete);

// --------- ROTAS CLIENTE ---------
// PRINCIPAL
app.get("/cliente", (req, res) => {
  // return res.send("Olá mundo!");
  return res.json({ message: "Bem vindo à nossa API" }); // Em JSON
});

// POST - CREATE/CADASTRAR
app.post("/cadastrarcliente", clienteController.ClienteCreate);

// GET - READ/LISTAR (com ou sem id)
app.get("/clientes/:id?", clienteController.ClienteListar);

// PUT - UPDATE/ALTERAR
app.put("/clientes/:id", clienteController.ClienteUpdate);

// DELETE - EXCLUIR
app.delete("/clientes/:id", clienteController.ClienteDelete);
