page('/', bookmarkController.index, function(){
  console.log(bookmarkController.urlData);
  console.log(context.params.urlData);
});
