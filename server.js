var express = require('express'),
  port = process.env.PORT || 5000,
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  sqlite3 = require('sqlite3').verbose(),
  cors = require('cors'),
  db = new sqlite3.Database('bookmark.db');

//_______model user and bookmark_____________//

function User(opts) {
  this.id = opts.id;
  this.username = opts.username;
  this.bookmarks = opts.bookmarks;
};

function Bookmark(opts) {
  this.id = opts.id;
  this.user_id = opts.user_id;
  this.title = opts.title;
  this.url = opts.url;
  this.timestamp = opts.timestamp;
}

//default if not logged in

var activeUser = new User(
  {
    id : 2,
    username : 'unknown',
    bookmarks : [new Bookmark({id: 1, user_id: 2, title: 'New York Times', url: 'https://www.nytimes.com', timestamp: new Date(2012,0,1)}),
                 new Bookmark({id: 2, user_id: 2, title: 'BBC', url: 'https://www.bbb.com', timestamp: new Date(2011,0,1)}),
                 new Bookmark({id: 3, user_id: 2, title: 'Wayback Machine', url: 'https://archive.org/web/', timestamp: new Date(2010,0,1)})]
  }
);


//_______serialize db____________________//

db.serialize(function() {
  db.run('CREATE TABLE if not exists users (username VARCHAR(150), password VARCHAR(150))');
  db.run('CREATE TABLE if not exists bookmarks (user_id INT, url VARCHAR(150), title VARCHAR(150), timestamp INT)');

  // // uncomment below for dummy data to fill up an empty table
  //
  // db.run('INSERT INTO users (username, password) VALUES (?, ?), (?, ?)', 'admin', 'admin', 'unkown', '');
  // db.run('INSERT INTO bookmarks (user_id, url, title, timestamp) VALUES (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?)',
  //       activeUser.id, activeUser.bookmarks[0].url, activeUser.bookmarks[0].title, activeUser.bookmarks[0].timestamp,
  //       activeUser.id, activeUser.bookmarks[1].url, activeUser.bookmarks[1].title, activeUser.bookmarks[1].timestamp,
  //       activeUser.id, activeUser.bookmarks[2].url, activeUser.bookmarks[2].title, activeUser.bookmarks[2].timestamp
  //       );

});

//_______log table data to console at startup____________________//
var printTables = function(){
  console.log('\nusers:');
  db.each('SELECT *, rowid FROM users', function(err, row, next) {
    console.log(row.rowid + ': ' + row.username + ' ' + row.password);
  }, function() {
    console.log('\nbookmarks:');
    db.each('SELECT *, rowid FROM bookmarks', function(err, row) {
      console.log(row.rowid + ': '+ row.user_id + ' ' + row.url + ' ' + row.title + ' ' + row.timestamp);
    });
  });
};

//log what's in the tables at startup
printTables();

//_______initialize____________________//

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

//is this needed??
app.get('/', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

//_______REST routes____________________//

//GET user
app.get('/users/:username',

  function(request, response, next){

    db.get('SELECT *, rowid FROM users WHERE username=?', request.params.username, function(err, row){
      activeUser = new User(
        {
          id : row.rowid,
          username : row.username,
          bookmarks : []
        }
      );
      next();
    });
  },

  function(request, response) {
    response.json(activeUser);
  }
);

//POST user
app.post('/users/:username',

  function(request, response, next){
    //db statement
    console.log(request.params.username);
    next();
  },

  function(request, response) {
    console.log(request.params);
    //send something
    // response.send(1);
    response.sendStatus(1);
  }
);

//DELETE user by username
app.delete('/users/:username',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

//GET all user bookmarks
app.get('/users/:username/bookmarks',

  //la la pretend authentication is done
  function(request, response, next){

  },
  function(request, response) {

    //send something
    response.send();
  }
);

//GET user bookmark by id
app.get('/users/:username/bookmarks/:id',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

//POST user bookmark
app.post('/users/:username/bookmarks/bookmark',

  function(request, response, next){

    var bookmark = new Bookmark({
      id : null,
      user_id : activeUser.id,
      title : request.body.title,
      url : request.body.url,
      timestamp : new Date()
    });

    var parameters = [
      bookmark.user_id,
      bookmark.title,
      bookmark.url,
      bookmark.timestamp
    ];

    db.run('INSERT INTO bookmarks (user_id, url, title, timestamp) VALUES (?, ?, ?, ?)', parameters, function(err, row){
      next();
    });
  },

  function(request, response) {
    printTables();
    //send something
    response.send();
  }
);

//DELETE user bookmark by id
app.delete('/users/:username/bookmarks/:id',

  function(request, response, next){
    //db statement
  },
  function(request, response) {

    //send something
    response.send();
  }
);

// app.get('/users/:username',
//
//   function(request, response, next) {
//     var username = request.params.username;
//     urlData = [];
//     db.each('SELECT url FROM urlData', function(err, row) {
//       urlData.push(row.url);
//     }, next);
//   },
//
//   function(request, response) {
//     console.log('Request for urlData:', urlData);
//     response.json(urlData);
//   }

// );
//
//
// app.post('/users/user/bookmark', function(request, response){
//   var title = request.body.title;
//   var url = request.body.url;
//   // db.run('INSERT INTO urlData VALUES (?)', bookmark);
//   // console.log('add: ' + bookmark);
//   // db.each('SELECT rowid AS id, url FROM urlData', function(err, row) {
//   //   console.log(row.id + ': ' + row.url);
//   // });
//   console.log('Title= ' + title + 'and url=' + url);
//   response.send({title : title, url : url});
// });

//_______listen up!____________________//

app.listen(port, function() {
  console.log('Server started on port ' + port + '!' );
});
