(function(module){

  var bookmarkController = {};

  bookmarkController.getUserInfo = function(username, next){
    console.log(username);

    //pretend authentication has happened
    User.name = name;

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
  },

  bookmarkController.requestData = function(url, type) {
    return $.ajax({
      url: url,
      type: type
    });
  };

  module.bookmarkController = bookmarkController;
})(window);
