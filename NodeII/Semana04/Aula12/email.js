const express = require("express");
const app = express();
const nodemailer = require("nodemailer"); //npm install nodemailer
const porta = 443;

app.get("/", (req, res) => {
  res.send("Enviando e-mail com Nodemailer!");
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
