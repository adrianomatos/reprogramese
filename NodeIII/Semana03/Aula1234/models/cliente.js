// Criando o MODEL CLIENTE

// Biblioteca
const Sequelize = require("sequelize");
const database = require("../db");

const Cliente = database.define("cliente", {
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

  nascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  cidade: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },

  telefone: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
});

module.exports = Cliente;
