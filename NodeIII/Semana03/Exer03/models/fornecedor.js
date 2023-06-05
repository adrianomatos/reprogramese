// Criando o MODEL FORNECEDOR

// Biblioteca
const Sequelize = require("sequelize");
const database = require("../db");

const Fornecedor = database.define("fornecedor", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },

  telefone: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },

    email: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  
});

module.exports = Fornecedor;
