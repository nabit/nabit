
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
