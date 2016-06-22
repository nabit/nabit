var express = require('express'),
  port = process.env.PORT || 5000,
  app = express(),
  bodyParser = require('body-parser'),
  sqlite3 = require('sqlite3').verbose(),
  db = new sqlite3.Database('urlData.db');

var user = {
  id : null,
  name : null,
  bookmarks : []
};

function Bookmark(title, url, timestamp) {
  this.title = title;
  this.url = url;
  this.timestamp = timestamp;
}

//_______serialize db____________________//

db.serialize(function() {
  db.run('CREATE TABLE if not exists users (username VARCHAR(150), password VARCHAR(150))');
  db.run('CREATE TABLE if not exists bookmarks (user_id INT url VARCHAR(150), title VARCHAR(150), timestamp REAL)');

  //uncomment for dummy data
  db.run('INSERT INTO users (username, password) VALUES (?, ?), (?, ?), (?, ?)', "admin", "admin", "dano", "1234", "aaron", "password");
});

//_______initialize routes____________________//

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//_______REST routes____________________//

//is this needed??
app.get('/', function(request, response) {

  // urlData = JSON.stringify(urlData);
  console.log('New request:', request.url);

  response.sendFile('index.html', { root: '.' });
});

//GET user
app.get('/:user',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

//POST user
app.post('/:user',

  function(request, response, next){
    //db statement
    next();
  },
  function(request, response) {
    console.log(request.params);
    //send something
    response.send(request.params);
  }
);

//DELETE user by username
app.delete('/:user',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

//GET all user bookmarks
app.get('/:user/bookmarks',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

//GET user bookmark by id
app.get('/:user/bookmarks/:id',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

//POST user bookmark
app.get('/:user/bookmarks/bookmark',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

//DELETE user bookmark by id
app.delete('/:user/bookmarks/:id',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);







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

//_______listen up!____________________//

app.listen(port, function() {
  console.log('Server started on port ' + port + '!' );
});
