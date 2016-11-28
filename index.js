var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/piazza', function(request, response) {
  response.render('pages/locations/piazza.ejs');
});
app.get('/rialto', function(request, response) {
  response.render('pages/locations/rialto.ejs');
});
app.get('/mauker', function(request, response) {
  response.render('pages/locations/mauker.ejs');
});
app.get('/chats', function(request, response) {
  response.render('pages/locations/chats.ejs');
});
app.get('/23rd', function(request, response) {
  response.render('pages/locations/23rd.ejs');
});
app.get('/biscottis', function(request, response) {
  response.render('pages/locations/biscottis.ejs');
});
app.get('/bookbistro', function(request, response) {
  response.render('pages/locations/bookbistro.ejs');
});
app.get('/crunchbreak', function(request, response) {
  response.render('pages/locations/crunchbreak.ejs');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


