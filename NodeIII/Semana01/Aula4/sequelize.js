// npm install sqlite3
// npm install sequelize

// Biblioteca
const { Sequelize, Model, DataTypes } = require("sequelize");

// Conexão
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

// Sincronismo
(async () => {
  await sequelize.sync({ force: true });
})();
