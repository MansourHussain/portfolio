
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
});


conn.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    conn.query("CREATE DATABASE login", function (err, result) {
        if (err) throw err;
        console.log("Databese Created Successfully!")
    });
});
