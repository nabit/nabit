<<<<<<< HEAD
(function(module) {
  Bookmarks.all = [];
=======
(function (module) {
>>>>>>> getserverdata

  function Bookmark(title, url, timestamp) {
    this.title = input.title;
    this.url = input.url;
<<<<<<< HEAD

  }

  Bookmarks.prototype.toHtml = function() {

    var remindCarouselTemplate = $('#carousel-reminder-template').html();
    var recentsCarouselTemplate = $('#carousel-recent-template').html();
    var compiledTemplates = Handlebars.compile(remindCarouselTemplate, recentsCarouselTemplate);

    return compiledTemplate(this);

  };

  Bookmarks.loadAll = function(datas) {
    Bookmarks.all = datas.map(function(i) {
      return new Bookmarks(i);
    });
  };

  Bookmarks.fetchall = function(callBack) {

  };


  module.Bookmarks = Bookmarks;
=======
    this.timestamp = new Date(timestamp);
  };

  module.Bookmark = Bookmark;
>>>>>>> getserverdata
})(window);

//
// javascript:(function(){
//   var title = $('document.title');
//   var url = $('window.location.href');
//   $.ajax({
//     type: 'POST',
//     url: '/users/user/bookmark',
//     data: {title: title, url: url},
//     success: function(data) {
//       console.log('data', data);
//     }
//   });
//   return false;
// }());
