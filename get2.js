
var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname+"/"+'index.html');
})

app.get('/login', function(req, res) {
    res.send('<h1>'+'the username is: '+req.query['username']+' and, the email is:'+ req.query['email']+'</h1>')
        

    
})

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('app running on http://localhost:8000', host, port);
})