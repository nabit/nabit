(function(module) {

  var userController = {};

  userController.init = function() {
    console.log('userController init');
    var id = localStorage.getItem('userId');

    this.handleLoginSubmit();
    this.handleSignupSubmit();
    allBkmController.getAllBookmarksByUserId(id);
  };

  //
  userController.handleLoginSubmit = function() {
    var self = this;
    $('#login-btn').on('click', function(e){
      e.preventDefault();
      self.getUserId($('#username').val(), $('#pwd').val());
    });
  };

  userController.handleSignupSubmit = function() {
    var self = this;
    $('#signup-btn').on('click', function(e){
      e.preventDefault();
      self.postUser($('#username').val(), $('#pwd').val());
    });
  };

  userController.postUser = function(username, password, next){
    var self = this;

    // pretend authentication has happened
    $.ajax({
      url: '/users/' + username + '/' + password,
      type: 'POST',
      success: function(user, status, xhr) {
        localStorage.setItem('userId', user);
      },
      error: function(data, status, xhr) {
        console.log(data);
        console.log(status);
        console.log(xhr);
      }
    });
  };

  userController.getUserId = function(username, password, next){
    var self = this;
    console.log(username);

    // pretend authentication has happened
    $.ajax({
      url: '/users/' + username + '/' + password,
      type: 'GET',
      success: function(user, status, xhr) {
        localStorage.setItem('userId', user);
        allBkmController.getAllBookmarksByUserId(user);
      },
      error: function(data, status, xhr) {
        console.log(data);
        console.log(status);
        console.log(xhr);
      }
    });
  };

  module.userController = userController;
})(window);
