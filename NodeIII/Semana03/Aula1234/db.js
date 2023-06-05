// Criando o BANCO DE DADOS

// npm install sqlite3
// npm install sequelize
// npm install ejs
// npm install express

// npm install sqlite3 sequelize ejs express

// Biblioteca
const Sequelize = require("sequelize");
// Conexão
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./cliente.sqlite",
});

module.exports = sequelize;
