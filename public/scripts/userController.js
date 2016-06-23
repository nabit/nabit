(function(module) {

  userController = {
    activeUser : null
  };

  userController.init = function() {
    console.log();
    this.handleLoginSubmit();
  };

  //
  userController.handleLoginSubmit = function() {
    $('#login-btn').on('click', function(){
      bookmarkController.getUser($('#username').val());
    });
  };

  module.userController = userController;
})(window);
