const { connect } = require("http2");

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'login'
});


conn.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Created Successfully!")
    });
});
