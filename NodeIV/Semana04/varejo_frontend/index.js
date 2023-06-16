// npm install express
// npm install express-handlebars
// npm install axios        //comunicação com API

const express = require("express");
const app = express();

// SERVICES
const Services = require("./services/services");

// HANDLEBARS - Gerenciamento das Views
const hand = require("express-handlebars");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROTAS
const routes = require("./routes/routes");
// DECODIFICAÇÃO DE URL DO EXPRESS -> JSON
app.use("/", routes);

// SERVIDOR
app.listen(3000, () => {
  console.log("Servidor FRONTEND rodando na porta 3000");
});
