
(function (module) {
  Bookmarks.all = [];

  function Bookmarks(input) {
    this.title = input.title;
    this.url = input.url;

  }

  Bookmarks.prototype.toHtml = function() {

    var articleTemplate = $('#template').html();
    var compiledTemplate = Handlebars.compile(articleTemplate);

    return compiledTemplate(this);

  };


  Bookmarks.loadAll = function(datas) {
    Bookmarks.all = datas.map(function(i) {
      return new Bookmarks(i);
    });
  };

  Bookmarks.fetchall = function(callBack) {

  //   if (localStorage.rawData) {
  //       Bookmarks.loadAll(
  //        JSON.parse(localStorage.getItem('rawData'))
  //         );
  //     callBack();
  //   }
  //   else {
  //     $.getJSON('', function(datas) {
  //       localStorage.setItem('rawData', JSON.stringify(datas));
  //       Projects.loadAll(datas);
  //       callBack();
  //     });
  //   }
  };

  module.Bookmarks = Bookmarks;
})(window);
