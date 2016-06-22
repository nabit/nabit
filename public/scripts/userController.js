(function(module) {

  userController = {};

  userController.init = function() {
    console.log();
    this.handleLoginSubmit();
  };

  //
  userController.handleLoginSubmit = function() {
    $('#login-btn').on('click', function(){
      bookmarkController.getUserInfo($('#username').val());
    });
  };

  module.userController = userController;
})(window);
