// npm install sqlite3
// npm install sequelize

// Bibliotecas e módulos
const Sequelize = require("sequelize");

// Banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  // Criado na pasta raiz
  storage: "./videoteca.sqlite",
});

// Tratamento e autenticação
try {
  sequelize.authenticate();
  console.log("Conexão ao banco de dados realizada com sucesso!");
} catch (error) {
  console.log("Erro ao conectar banco de dados. \n", error);
}

module.exports = sequelize;
