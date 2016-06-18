page('/post/:user/:bookmark', postUserBookmark, refreshPage);
page('/', bookmarkController.index);
page('/everyBkm', everyBkmController.index);
/*
  www.nabit.herokuapp.com/post/admin/www.nytimes.com

  context.params.user = 'admin'
  context.params.bookmark = 'www.nytimes.com'

  function postUserBookmark(context, next) {
    var stmt = db.prepare('INSERT INTO url_table VALUES (?)');

    stmt.run(context.params.bookmark);

    db.finalize();
  }

  bookmarklet:

  javascript:(function(){
    var user = 'admin'
    $.ajax({
      type: 'POST'
      url: 'www.nabit.herokuapp.com/post/' + user + '/' + window.location.href
    })
  })();
*/
