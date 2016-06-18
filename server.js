var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.get('/', function(request, response) {
  // console.log('New request:', request.url);
  // response.sendFile('index.html', { root: '.' });
  response.send('<h1>I\'m a headline!</h1>');
});

app.get('/post/:bookmark', function(request, response){
  var bookmark = request.params.bookmark;
  //add to db
  response.send('<h1>' + bookmark + '</h1>');
  console.log(bookmark);
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!' );
});
