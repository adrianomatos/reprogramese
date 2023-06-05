// npm install express
const express = require("express");
const app = express();

// ROTAS
app.get("/", (req, res) => {
  // return res.send("Olá mundo!");
  return res.json({ message: "Olá Mundo" }); // Resposta em JSON
});

// Msg Servidor
app.listen(3000, () => {
  console.log("Servidor conectado!");
});
