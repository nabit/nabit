(function(module) {
  var allBkmController = {};

  allBkmController.handleAllBookmarksSubmit = function() {
    var self = this;
    $('#history-link').on('click', function(e){
      e.preventDefault();
      var id = localStorage.getItem('userId');
      console.log('id', id);
      if(id) {
        self.getAllBookmarksByUserId(id);
      }
    });
  };

  allBkmController.handleRemove = function() {
    var self = this;
    $('#iframes-input').on('click', $('.remove-btn'), function(e){
      e.preventDefault();
      var id = localStorage.getItem('userId');
      var bookmarkId = $(this).val();
      console.log('bookmark id', bookmarkId);
      console.log('id', id);
      if(id) {
        self.getAllBookmarksByUserId(id);
      }
    });
  };

  allBkmController.getAllBookmarksByUserId = function(id) {
    var self = this;

    // pretend authentication has happened
    $.ajax({
      url: '/users/' + id +'/bookmarks/all',
      type: 'GET',
      success: function(data, status, xhr) {
        console.log('bookmarks', data);
        // self.showBookmarks(data);
        var bookmarks = self.makeNewBookmarks(data);
        self.renderCarousel(bookmarks);
      },
      error: function(data, status, xhr) {
        console.log(data);
        console.log(status);
        console.log(xhr);
      }
    });
  };

  allBkmController.makeNewBookmarks = function (data) {
    return data.map(function(item) {
      return new Bookmark(item);
    });
  };

  allBkmController.renderCarousel = function(bookmarks) {
    $('#iframes-input').empty();
    bookmarks.forEach(function(bookmark) {
      bookmark.url = bookmark.url.replace('+','/');
      $('#iframes-input').append(bookmark.toHtml());
    });
  };

  allBkmController.handleRemove();
  allBkmController.handleAllBookmarksSubmit();

  module.allBkmController = allBkmController;
})(window);
