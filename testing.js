(function(){
  var script = document.createElement('script');
  var url = 'http:nabit.herokuapp.com/post/' + window.location.href;
  script.src = '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
  document.head.appendChild(script);
  $.ajax({
    type : 'POST',
    url : url
  });
  console.log('send:' + url);
})();
