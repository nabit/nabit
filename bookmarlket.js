javascript:(function(){
  var post_to_url = function(path, params) {
    var form = window.document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', path);
    for(var key in params) {
      var hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);
      form.appendChild(hiddenField);
    }
    window.document.body.appendChild(form);
    form.submit();
    console.log('add:' + window.location.href + 'to db');
  };

  post_to_url(
    'localhost:3000/post',
    {url: window.location.href}
  );
})();

    /* 'http://nabit.herokuapp.com/post', */
