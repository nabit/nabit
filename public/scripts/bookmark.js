
(function(module) {


  function Bookmark(opts) {
    this.id = opts.id;
    this.title = opts.title;
    this.url = opts.url;
    this.timestamp = opts.timestamp;
  }


  Bookmark.prototype.toHtml = function() {
    var iframeTemplate = $('#template').html();
    var compiledTemplate = Handlebars.compile(iframeTemplate);

    return compiledTemplate(this);
  };

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
