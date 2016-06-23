
(function(module) {


  function Bookmark(title, url, timestamp) {
    this.title = title;
    this.url = url;
    this.timestamp = timestamp;

  }

  // Bookmark.prototype.toHtml = function() {
  //
  //   var remindCarouselTemplate = $('#carousel-reminder-template').html();
  //   var recentsCarouselTemplate = $('#carousel-recent-template').html();
  //   var compiledTemplates = Handlebars.compile(remindCarouselTemplate, recentsCarouselTemplate);
  //
  //   return compiledTemplate(this);
  //
  // };

  module.Bookmark = Bookmark;

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
