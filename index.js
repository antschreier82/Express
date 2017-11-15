var express = require('express');
var app = express();
var path = require('path');

//app.use('/', express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
    
    app.get ('/', function (req, res) {
        res.sendFile(path.join(__dirname + "/author.html"));
    });
});

app.get ('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/author.html"));
});

app.get ('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/user.html"));
})
app.listen(3000);