(function(module){

  var bookmarkController = {};

  bookmarkController.getUserInfo = function(username, next){
    console.log(username);

    //pretend authentication has happened
    User.name = username;

    this.requestData('/' + User.name, 'GET')
      .done(function(data, status, xhr) {
        User.bookmarks = data;
        console.log('status: ' + status);
        console.log('data: ' + data);
        console.log('xhr: ' + xhr);
        next();
      })
      .fail(function(data, message, xhr) {
        console.log('status: ' + status);
        console.log('data: ' + data);
        console.log('xhr: ' + xhr);
      });
  };

  bookmarkController.requestData = function(url, type) {
    return $.ajax({
      url: url,
      type: type
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
