var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'login'
});

conn.connect(function(err){
    if (err) {
        throw err;
    }
    else {
        console.log("Connected");
    }
    
    var query = "INSERT INTO users (name, address) VALUES ('Mansour', 'Saudi Arabia')";
    conn.query(query, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log("user info Inserted Successfully!")
        }
    });
});
