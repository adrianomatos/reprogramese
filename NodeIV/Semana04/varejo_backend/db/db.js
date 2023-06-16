// npm install sqlite3
// npm install sequelize

// Bibliotecas e módulos
const Sequelize = require("sequelize");

// Banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite", // Tipo sqlite
  storage: "./varejo.sqlite", // Pasta raiz
});

// Tratamento e autenticação
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (error) {
  console.log("Erro na conexão.\n", error);
}

module.exports = sequelize;
