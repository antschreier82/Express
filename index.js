var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/author.html"));
    res.sendFile(path.join(__dirName + "/styles.css"));
});

app.listen(3000);