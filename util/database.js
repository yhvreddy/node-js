const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mylife@17101994",
  database: "node-complete",
});

module.exports = pool.promise();
