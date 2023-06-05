// Criando o BANCO DE DADOS

// npm install sqlite3
// npm install sequelize
// npm install ejs
// npm install express

// Biblioteca
const Sequelize = require("sequelize");
// Conexão
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./fornecedor.sqlite",
});

module.exports = sequelize;
