var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'login'
});
       
conn.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    var sql = "DELETE FROM users WHERE name ='Abdullah'";
    conn.query(sql, function(err, result){
        if (err) throw err;
        console.log("Deleted row :)")
    })
})