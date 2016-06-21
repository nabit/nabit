(function(module) {
  Bookmarks.all = [];

  function Bookmarks(input) {
    this.title = input.title;
    this.url = input.url;

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

  Bookmarks.testForm = function() {
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

  Bookmarks.testForm();
  module.Bookmarks = Bookmarks;
})(window);
