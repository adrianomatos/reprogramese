// npm install express
// npm install express-handlebars
const express = require("express");
const app = express();
const porta = 3000;

// HANDLEBARS - Gerenciamento das Views
const hand = require("express-handlebars");
app.set("view engine", "html");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

// ROTAS
var Route = require("./routes/Route");

// DECODIFICAÇÃO DE URL DO EXPRESS -> JSON
app.use(express.urlencoded({ extended: true }));
app.use("/", Route); //Tem que vir após url Encoded

// Msg Servidor
app.listen(porta, () => {
  console.log("Servidor conectado!");
});
