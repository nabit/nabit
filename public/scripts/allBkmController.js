(function(module) {
  var allBkmController = {};

  allBkmController.handleAllBookmarksSubmit = function() {
    var self = this;
    $('#history-link').on('click', function(e){
      e.preventDefault();
      var id = localStorage.getItem('userId');
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
      var bookmarkId = $(e.target).parent().attr('data-rowid');
      if(id) {
        self.removeBookmarkById(id, bookmarkId);
      }
    });
  };

  allBkmController.removeBookmarkById = function(id, bookmarkId) {
    var self = this;

    // pretend authentication has happened
    $.ajax({
      url: '/users/' + id +'/bookmark/' + bookmarkId,
      type: 'DELETE',
      success: function(data, status, xhr) {
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

  allBkmController.getAllBookmarksByUserId = function(id) {
    var self = this;

    // pretend authentication has happened
    $.ajax({
      url: '/users/' + id +'/bookmarks/all',
      type: 'GET',
      success: function(data, status, xhr) {
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
    }).sort(function(a, b) {
      return b.timestamp - a.timestamp;
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
