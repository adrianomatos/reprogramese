// npm install express
const express = require("express");
const app = express();
const database = require("./db/db");

// MODELS
const Usuario = require("./model/usuarioModel");
const Tarefa = require("./model/tarefaModel");

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
      console.log("Servidor rodando na porta 9443");
    });
  });
} catch (error) {
  console.log("Falha ao sincronizar com o banco de dados. \n", error);
}

// SERVIDOR
// app.listen(9443, () => {
//   console.log("Servidor rodando na porta 9443");
// });
