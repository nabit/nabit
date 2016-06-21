var express = require('express'),
  port = process.env.PORT || 5000,
  app = express(),
  sqlite3 = require('sqlite3').verbose(),
  db = new sqlite3.Database('urlData.db'),
  urlData = [];

//_______serialize db____________________//

db.serialize(function() {
  db.run('CREATE TABLE if not exists urlData (url TEXT)');
  db.each('SELECT rowid AS id, url FROM urlData', function(err, row) {
    console.log(row.id + ': ' + row.url);
  });
});

//_______initialize routes____________________//

app.use(express.static('./'));

app.get('/', function(request, response) {
  console.log('New req:', request.url);
  response.sendFile('index.html', { root: '.' });
});

//when a user is visits this endpoint, fetch their bookmarks from DB
//for now, there are no users, so this will fetch a list of urls
app.get('/users/:username',

  function(request, response, next) {
    var username = request.params.username;
    db.each('SELECT url FROM urlData', function(err, row) {
      urlData.push(row.url);
    }, next);
  },

  function(request, response) {
    console.log('Request for urlData:', urlData);
    // response.send(JSON.stringify(urlData));
    response.json(urlData);
  }

);

app.get('/post/users/:user/:bookmark', function(request, response){
  var bookmark = request.params.bookmark;
  db.run('INSERT INTO urlData VALUES (?)', bookmark);
  db.each('SELECT rowid AS id, url FROM urlData', function(err, row) {
    console.log(row.id + ': ' + row.url);
  });
  console.log('add: ' + bookmark);
  // response.send('<h1>' + bookmark + '</h1>');
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!' );
});
