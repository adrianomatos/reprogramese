const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const porta = 443;

// npm install body-parser ejs express-session
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: "123456" }));
var login = "admin";
var senha = "1234";

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./"));

app.get("/", (req, res) => {
  if (req.session.login) {
    res.render("logado");
    console.log("Voçê está logado: " + req.session.login);
  } else {
    res.render("login");
    // console.log("Voçê precisa fazer login!");
  }
});

app.post("/", (req, res) => {
  if (req.body.password == senha && req.body.login == login) {
    // Logado com sucesso
    req.session.login = login;
    res.render("logado");
  } else {
    res.render("login");
  }
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
