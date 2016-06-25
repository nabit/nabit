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

        console.log("This is my array of objects? ", bookmarks);


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
      console.log('this item', item);
      return new Bookmark(item);

    });
  };

  allBkmController.renderCarousel = function(bookmarks) {
    $('#iframes-input').empty();
    bookmarks.forEach(function(bookmark) {
      bookmark.url = bookmark.url.replace('+','/');
      
      console.log("is it doing it? ", bookmark);
      $('#iframes-input').append(bookmark.toHtml());
    });
  };


  // allBkmController.showBookmarks = function(data){
  //   console.log('here', data);
  //   data.map(function(bookmark){
  //     var html = '';
  //     html += '<li class="bookmark">';
  //     html += '<a href=' + bookmark.url + '>' + bookmark.title + '</a>';
  //     html += '<span>' + new Date(bookmark.timestamp) + '</span>';
  //     html += '</li>';
  //     console.log('html', html);
  //     return html;
  //   }).forEach(function(bookmark){
  //     $('#my-bookmarks-temp').append(bookmark);
  //   });
  // };

  // allBkmController.handleAllBookmarksSubmit();

  module.allBkmController = allBkmController;
})(window);
