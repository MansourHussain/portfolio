
var express = require('express');
var app = express();
var bodyPa = require('body-parser');
var urlenco = bodyPa.urlencoded({extended:false});
app.use(express.static('public'))

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname+"/"+'index.html');
})

app.post('/login', urlenco, function(req, res) {
    response = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.Phone,
        city: req.body.city,
        country: req.body.country
    }
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('app running on http://localhost:8000', host, port);
})