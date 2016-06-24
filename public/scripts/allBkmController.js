(function(module) {
  var allBkmController = {};

  allBkmController.handleSignupSubmit = function() {
    var self = this;
    $('#history-link').on('click', function(e){
      e.preventDefault();
      var id = localStorage.getItem('userId');
      if(id) {
        self.getBookmarksById(id);
      }
    });
  };

  allBkmController.getBookmarksById = function(id) {
    var self = this;

    // pretend authentication has happened
    $.ajax({
      url: '/users/' + ,
      type: 'GET',
      success: function(data, status, xhr) {
        console.log('bookmarks', data);
        self.showBookmarks(data);
      },
      error: function(data, status, xhr) {
        console.log(data);
        console.log(status);
        console.log(xhr);
      }
    });
  };

  allBkmController.showBookmarks = function(bookmarks){
    $('#my-bookmarks').append(data);
  };

  module.allBkmController = allBkmController;
})(window);
