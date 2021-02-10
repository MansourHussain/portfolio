
var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname+"/"+'index.html');
})

app.get('/login', function(req, res) {
    response = {
        username: req.query.username,
        password: req.query.password,
        email: req.query.email,
        phone: req.query.Phone,
        city: req.query.city,
        country: req.query.country
    }
    console.log(response);
    res.end(JSON.stringify(response));

    
})

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('app running on http://localhost:8000', host, port);
})