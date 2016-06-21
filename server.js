var express = require('express'),
  port = process.env.PORT || 5000,
  app = express(),
  bodyParser = require('body-parser'),
  sqlite3 = require('sqlite3').verbose(),
  db = new sqlite3.Database('urlData.db'),
  urlData = [];

//_______serialize db____________________//

db.serialize(function() {
  db.run('CREATE TABLE if not exists urlData (url VARCHAR(150), title VARCHAR(150))');
  db.each('SELECT rowid AS id, url, title FROM urlData', function(err, row) {
    // console.log(row.id + ': ' + row.url + ' ' + title);
  });
});

//_______initialize routes____________________//

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(request, response) {

  // urlData = JSON.stringify(urlData);
  console.log('New request:', request.url);

  response.sendFile('index.html', { root: '.' });
});

//when a user is visits this endpoint, fetch their bookmarks from DB
//for now, there are no users, so this will fetch a list of urls
app.get('/users/:username',

  function(request, response, next) {
    var username = request.params.username;
    urlData = [];
    db.each('SELECT url FROM urlData', function(err, row) {
      urlData.push(row.url);
    }, next);
  },

  function(request, response) {
    console.log('Request for urlData:', urlData);
    response.json(urlData);
  }

);
//
// app.get('/post/users/:user/:bookmark', function(request, response){
//   var bookmark = request.params.bookmark;
//   db.run('INSERT INTO urlData VALUES (?)', bookmark);
//   db.each('SELECT rowid AS id, url FROM urlData', function(err, row) {
//     console.log(row.id + ': ' + row.url);
//   });
//   console.log('add: ' + bookmark);
//   response.send('<h1>' + bookmark + '</h1>');
// });

app.post('/users/user/bookmark', function(request, response){
  var title = request.body.title;
  var url = request.body.url;
  // db.run('INSERT INTO urlData VALUES (?)', bookmark);
  // console.log('add: ' + bookmark);
  // db.each('SELECT rowid AS id, url FROM urlData', function(err, row) {
  //   console.log(row.id + ': ' + row.url);
  // });
  console.log('Title= ' + title + 'and url=' + url);
  response.send({title : title, url : url});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!' );
});
