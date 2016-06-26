(function(module) {
  var bookmarkView = {};

  bookmarkView.modal = function() {
    $('#cross-button').on('click', function() {
      console.log('reload');
      window.location.reload();
    });

    $('#login-button').on('click', function() {
      $('#login').addClass('show');
    });

  };
  bookmarkView.nav = function() {
    $('#logout-button').addClass('hide');
    $('#login-button').on('click', function() {
      $('#login').addClass('show');
      $('#logout-button').removeClass('hide').addClass('show');
    });

  };

  //
  // bookmarkView.setup = function() {
  //   // $('#logout-button').addClass('hide');
  //   // $('#login-button').on('click', function() {
  //   //   $('#login').addClass('show');
  //   //   $('#logout-button').removeClass('hide').addClass('show');
  //   // });
  //
  // };



  bookmarkView.modal();
  bookmarkView.nav();
  module.bookmarkView = bookmarkView;
})(window);
