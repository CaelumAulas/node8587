require('dotenv').config()

module.exports = function () {
  
    const mysql = require("mysql");
    
    const conexao = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT
    });

    return conexao;
}