// Bibliotecas e módulos
const Sequelize = require("sequelize");

// Banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite", // Tipo sqlite
  storage: "./funcionario.sqlite", // Pasta raiz
});

// Tratamento e autenticação
try {
  sequelize.authenticate();
  console.log("Conexão com sucesso!");
} catch (error) {
  console.log("Erro na conexão.\n", error);
}

module.exports = sequelize;
