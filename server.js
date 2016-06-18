var express = require('express'),
  port = process.env.PORT || 3000,
  app = express(),
  sqlite3 = require('sqlite3').verbose(),
  db = new sqlite3.Database('urlData.db'),
  urlData = [];

//fetchfromDb is a 'middleware function' run whenever the page is loaded
//it grabs all the info from the db
var fetchFromDb = function(req, res, next) {

  db.each('SELECT url FROM urlData', function(err, row) {
    urlData.push(row.url);
  }, next);

};

var sendData = function(request, response, data) {
  response.send(data);
};

db.serialize(function() {
  db.run('CREATE TABLE if not exists urlData (url TEXT)');
  db.each('SELECT rowid AS id, url FROM urlData', function(err, row) {
    console.log(row.id + ': ' + row.url);
  });
});

// app.use(express.static('./'));

app.get('/', function(request, response) {
  // urlData = JSON.stringify(urlData);
  console.log('New request:', request.url);
  // response.sendFile('index.html', { root: '.' });
});

app.get('/data', fetchFromDb, sendData);

app.get('/post/:bookmark', function(request, response){
  var bookmark = request.params.bookmark;
  db.run('INSERT INTO urlData VALUES (?)', bookmark);
  db.each('SELECT rowid AS id, url FROM urlData', function(err, row) {
    console.log(row.id + ': ' + row.url);
  });
  console.log('add: ' + bookmark);
  response.send('<h1>' + bookmark + '</h1>');
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!' );
});
