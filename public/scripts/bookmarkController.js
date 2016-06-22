(function(module){

  var bookmarkController = {

    index : function(context, next){
      //get user and password?
      //otherwise, check local storage?
      //if no user, show login modal?
      //otherwise, load bookmarks
      console.log(bookmarkController.urlData);
      console.log(context.params.urlData);
      next();
    },

    getUserInfo : function(username, next){
      console.log('in user info');
      bookmarkController.requestData('/user/' + username, 'GET')
        .done(function(data, status, xhr) {
          bookmarkController.urlData = JSON.parse(urlData);
          context.userBookmarks = bookmarkController.urlData;
          console.log('status: ' + status);
          console.log('data: ' + data);
          console.log('xhr: ' + xhr);
          console.log(bookmarkController.urlData);
          next();
        })
        .fail(function(data, message, xhr) {
          console.log('status: ' + status);
          console.log('data: ' + data);
          console.log('xhr: ' + xhr);
        });
    },

    requestData : function(url, type) {
      return $.ajax({
        url: url,
        type: type
      });
    }

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
