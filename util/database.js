const Sequelize = require("sequelize");

const sequelize = new Sequelize("e-commerce", "root", "riteshrai", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
