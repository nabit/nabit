(function(module){

  var bookmarkController = {};
  // var user = 'unknown';

  bookmarkController.getUser = function(username, next){
    console.log(username);

    //pretend authentication has happened
    $.ajax({
      url: '/users/' + username,
      type: 'GET',
      success: function(user, status, xhr) {
        console.log(user);
      },
      error: function(data, message, xhr) {
        console.log(xhr);
      }
    });
  };

  // bookmarkController.testForm =
  //
  // javascript: function() {
  //     var title = $('document.title');
  //     var url = $('window.location.href');
  //     $.ajax({
  //       type: 'POST',
  //       url: 'http://localhost:5000/users/user/bookmark',
  //       data: {title: title, url: url},
  //       success: function(data) {
  //         console.log('data', data);
  //       }
  //     });
  //   return false;
  // } ();

  // bookmarkController.testForm();

  module.bookmarkController = bookmarkController;
})(window);
