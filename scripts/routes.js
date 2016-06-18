<<<<<<< HEAD
page('/', bookmarkController.index);
page('/everyBkm', everyBkmController.index);
page();
=======
page('/', bookmarkController.index, function(){
  console.log(bookmarkController.urlData);
  console.log(context.params.urlData);
});
>>>>>>> 790b4473f4182267b2a0767e4fb73cb0d73da0f4
