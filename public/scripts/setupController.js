var setupController = function() {
  console.log('run it');
  clickCount = 0;
  $('#setup-link').on('click', function() {
    clickCount++;
    $('#iframes-input').toggle('fast');
    $('.setup-page').removeClass('hide');
    console.log(clickCount);
  });
  //
  // function count () {
  //   if(clickCount > 0 && clickCount % 2 === 0)
  //   {
  //     console.log('is even');
  //
  //   }
  //   else
  //   {
  //     console.log('is odd');
  //   }
  // }

};

setupController();
