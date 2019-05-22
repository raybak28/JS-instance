var express = require('express');
var app = express();


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); 

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.post('/search-result', function (req, res) {
    var search = req.body.firstName;
    res.redirect(`https://www.google.com/search?q=${search}&source=lnms&tbm=isch&sa=X`);
});


app.listen(8080);

