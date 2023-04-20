const express = require("express");
const rotas = require("./rotasComExpress");
const porta = 443;
const app = express();

app.use("/", rotas);

// Msg OK
app.listen(porta, () => {
  console.log("Servidor rodando!");
});
