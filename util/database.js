const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Mylife@17101994", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
