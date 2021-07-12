var mysql = require('mysql');
var secret_config = require('../secret.json');
var db_config = secret_config.db_connection;

var db = mysql.createConnection({
    host : db_config.dev.host,
    user : db_config.dev.user,
    port : db_config.port,
    password : db_config.dev.password,
    database : db_config.dev.db
});

db.connect();


module.exports = db; //db라는 이름으로 exports