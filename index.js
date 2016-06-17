var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('url_table.db');
var check;
db.serialize(function() {

  db.run('CREATE TABLE if not exists url_table (url TEXT)');
  var stmt = db.prepare('INSERT INTO url_table VALUES (?)');

  stmt.run('www.nytimes.com');

  stmt.finalize();

  db.each('SELECT rowid AS id, url FROM url_table', function(err, row) {
    console.log(row.id + ': ' + row.url);
  });
});

db.close();
