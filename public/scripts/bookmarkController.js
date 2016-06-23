(function(module){

  var bookmarkController = {};
  var user = 'unknown';

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

  bookmarkController.testForm = function() {
    $('#form-submit').on('click', function() {
      var title = $('#titleinfo').val();
      var url = $('#urlinfo').val();
      $.ajax({
        type: 'POST',
        url: '/users/user/bookmark',
        data: {title: title, url: url},
        success: function(data) {
          console.log('data', data);
        }
      });
    });
    return false;
  };
  bookmarkController.testForm();

  module.bookmarkController = bookmarkController;
})(window);
