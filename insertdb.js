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
    
    var sql = "INSERT INTO users (name, address) VALUES ('Hassan', 'Khamis Mushait')";
    conn.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log("user info Inserted Successfully!")
        }
    });
});
