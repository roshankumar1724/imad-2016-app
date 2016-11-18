var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var template = require('./template.js');

app.use(morgan('combined'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// app.get('/public/css/style.css', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/css', 'style.css'));
// });
// app.get('/public/js/jquery-3.1.1.min.js', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/js', 'jquery-3.1.1.min.js'));
// });
// app.get('/public/css/bootstrap.css', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/css', 'bootstrap.css'));
// });
// app.get('/public/fonts/glyphicons-halflings-regular.ttf', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/fonts', 'glyphicons-halflings-regular.ttf'));
// });
// app.get('/public/fonts/glyphicons-halflings-regular.woff2', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/fonts', 'glyphicons-halflings-regular.woff2'));
// });
// app.get('/public/fonts/glyphicons-halflings-regular.woff', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/fonts', 'glyphicons-halflings-regular.woff'));
// });app.get('/public/js/bootstrap.js', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/js', 'bootstrap.js'));
// });
// app.get('/images/cricketBackground.png', function(req, res) {
//     res.sendFile(path.join(__dirname, 'images', 'cricketBackground.png'));
// });
// app.get('/images/cricket-logo.svg', function(req, res) {
//     res.sendFile(path.join(__dirname, 'images', 'cricket-logo.svg'));
// });

app.get('/ui/madi.png', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/:pageName', function(req, res) {
  var myPage = req.params.pageName;
  res.send(template.createTemplate(template.articles[myPage]));
});

// app.get('/ui/viewDetail', function(req, res) {
//     res.sendFile(path.join(__dirname, 'ui', 'viewDetail.html'));
// });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function() {
    console.log(`IMAD course app listening on port ${port}!`);
});
