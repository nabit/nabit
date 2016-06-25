
(function(module) {


  function Bookmark(opts) {
    this.id = opts.id;
    this.title = opts.title;
    this.url = opts.url;
    this.timestamp = opts.timestamp;
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
