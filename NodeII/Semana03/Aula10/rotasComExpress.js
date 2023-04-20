const express = require("express");
const rotas = express.Router();

let municipios = [
  { cidade: "fortaleza", info: "Fortaleza: Capital do Ceará" },
  { cidade: "recife", info: "Recife: Capital de Pernambuco" },
  { cidade: "maceio", info: "Maceió: Capital de Alagoas" },
  { cidade: "vitoria", info: "Vitória: Capital do ES" },
];

rotas.get("/", (req, res) => {
  res.json({
    Olá: "Seja bem-vindo!",
  });
  // res.write("Seja bem-vindo!");
});

rotas.get("/:cidadeid", (req, res) => {
  // Recebe valor da URL
  const cidade = req.params.cidadeid;
  // Armazena info da cidade repassada via URL
  const cidadeinfo = municipios.find((x) => x.cidade == cidade);

  // Verifica SE info da cidade repassada na URL foi encontrada
  if (!cidadeinfo) {
    res
      .status(404)
      .json({ erro: "Cidade não encontrada", cidadePesquisada: cidade });
  } else {
    res.status(200).json(cidadeinfo);
  }
});

module.exports = rotas;
