var express = require("express");
var router = express.Router();

// -------------------- ESTADOS
var estados = ["Ceará", "Piauí"];

// Formulário
router.get("/estados", function (req, res) {
  // Handlebars passa antes na pasta LAYOUT e no MAIN, dentro do main acessa FORM
  res.render("form");
});

// Busca por ID
router.get("/estados/:id", function (req, res) {
  let id = req.params.id;
  return res.json([estados[id]]);
});

// "Gravação" e exibição
router.post("/estados", function (req, res) {
  let nome = req.body.nome;
  estados[estados.length] = nome;
  return res.json([estados[estados.length - 1]]);
});

// -------------------- PRINCIPAL
router.get("/", function (req, res) {
  res.send("Bem vindo ao sistema");
});
router.post("/", function (req, res) {
  res.send("Inserir registro");
});

// -------------------- CLIENTES
router.get("/clientes/", function (req, res) {
  res.send("Sejam bem vindos.");
});
// router.get("/clientes/:nome", function (req, res) {
//     res.send("Seja bem vindo " + req.params.nome);
// });
// Sobrenome NÃO OBRIGATÓRIO usando ? (falta tratar)
router.get("/clientes/:nome/:sobrenome?", function (req, res) {
  res.send(
    "Seja bem vindo <h1>" +
      req.params.nome +
      " " +
      req.params.sobrenome +
      "</h1>"
  );
});

// -------------------- EXPORTS
module.exports = router;


// -------------------- EXEMPLO de Rota Para recupepar valores http (ex: nome par)
// http://localhost:3000/par/?nome=Adriano ou
// http://localhost:3000/par?nome=Adriano
router.get("/par", function (req, res) {
  let nome = req.query["nome"];

  if (nome) {
    res.send("<h1>" + nome + "</h1>");
  } else {
    res.send("Nenhum valor encontrado");
  }
});
