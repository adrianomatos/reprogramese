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
const Video = require("./models/Video");
const VideoRoutes = require("./routes/routesVideo");
// CONTROLLERS
const VideosControllers = require("./controllers/ControllerVideo");
//UTILIZAÇÃO DO HANDLEBARS 
app.engine("handlebars", hand.engine()); 
app.set("view engine", "handlebars"); 
app.use(express.urlencoded({extended: true,}));
// JSON
app.use(express.json()); 
app.use(express.static("public")); 
//ROTAS 
app.use("/", VideoRoutes);

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
