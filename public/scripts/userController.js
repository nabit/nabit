(function(module) {

  var userController = {
    user : new User({
      id : 0,
      username: 'unknown',
      bookmarks: [
        new Bookmark({
          id: null,
          user_id: 0,
          title: 'BBC',
          url: 'https://www.bbc.com',
          timestamp: new Date(2012,0,1)
        }),
        new Bookmark({
          id: null,
          user_id: 0,
          title: 'New York Times',
          url: 'https://www.nytimes.com',
          timestamp: new Date(2012,0,2)
        })]
    })
  };

  userController.init = function() {
    console.log('userController init');
    this.handleLoginSubmit();
  };

  //
  userController.handleLoginSubmit = function() {
    var self = this;
    $('#login-btn').on('click', function(e){
      e.preventDefault();
      self.getUser($('#username').val());
    });
  };

  userController.getUser = function(username, next){
    var self = this;
    console.log(username);

    // pretend authentication has happened
    $.ajax({
      url: '/users/' + username,
      type: 'GET',
      success: function(user, status, xhr) {
        self.user = user;
        console.log(status);
        console.log('data served:', user);
        console.log('saved', self.user);
      },
      error: function(data, status, xhr) {
        console.log(status);
        console.log(xhr);
      }
    });
  };

  module.userController = userController;
})(window);
