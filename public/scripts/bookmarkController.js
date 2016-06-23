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

  bookmarkController.testForm =

  javascript: function() {
      var title = $('document.title');
      var url = $('window.location.href');
      $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/users/user/bookmark',
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
