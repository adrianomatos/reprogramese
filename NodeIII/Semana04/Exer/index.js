// npm install sqlite3 sequelize
// npm install express
// npm install express-handlebars

// Bibliotecas e módulos
const database = require("./db/db");
const express = require("express");
const app = express();
// HANDLEBARS
const hand = require("express-handlebars");
// MODELS
const filme = require("./models/filme");
const filmeRoutes = require("./routes/routesFilme");
// CONTROLLERS
const filmeControllers = require("./controllers/controllerFilme");
//UTILIZAÇÃO DO HANDLEBARS
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
// JSON
app.use(express.json());
app.use(express.static("public"));
//ROTAS
app.use("/", filmeRoutes);

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
