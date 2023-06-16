// npm install express
// npm install jsonwebtoken dotenv-safe
const express = require("express");
const app = express();
const database = require("./db/db");
// JSONWEBTOKEN
const jwt = require("jsonwebtoken");

// MODELS
const Funcionario = require("./model/funcionarioModel");
const Livro = require("./model/livroModel");

// ROTAS
const routes = require("./routes/routes");
// DECODIFICAÇÃO DE URL DO EXPRESS -> JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ROTA PRINCIPAL
app.use("/", routes); //Tem que vir após url Encoded

// SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {
    app.listen(9443, () => {
      console.log("Servidor BACKEND rodando na porta 9443");
    });
  });
} catch (error) {
  console.log("Falha ao sincronizar com o banco de dados. \n", error);
}
