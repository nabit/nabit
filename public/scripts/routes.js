page('/', bookmarkController.index, function(){
  console.log(bookmarkController.urlData);
  console.log(context.params.urlData);
});

page('/users/:user', function() {
  console.log('render it!');
  console.log(context.userBookmarks);
});
