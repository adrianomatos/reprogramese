const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const porta = 443;

// Arquivos estáticos
app.use(express.static(__dirname + "/"));

const nodemailer = require("nodemailer"); //npm install nodemailer

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
    // console.log("Voçê está logado: " + req.session.login);
  } else {
    res.render("login");
    console.log("Voçê precisa fazer login!");
  }
});

app.post("/", (req, res) => {
  if (req.body.password == senha && req.body.login == login) {
    // Logado com sucesso
    req.session.login = login;
    res.render("logado");
    console.log("Voçê está logado: " + req.session.login);
  } else {
    res.render("login");
  }
});

// Criação da rota com Uso do site mailtrap
app.get("/sendmail", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4641fa69303a48",
      pass: "8856a7560e1c26",
    },
  });

  // Mensagem
  var message = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Instruções para recuperação de senha",
    text: "Adriano. \n\n Parece que você pediu para recuperar a senha. \n\n Se foi você, clique aqui...",
    html: "<p>Adriano, parece que você pediu para recuperar a senha, <a>clique aqui...</a></p>",
  };

  // Transporte
  transport.sendMail(message, function (err) {
    if (err) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro, mensagem não enviada",
      });
    } else {
      return res.json({
        erro: false,
        mensagem: "Mensagem enviada com sucesso!",
      });
    }
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
