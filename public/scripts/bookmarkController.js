(function(module){

  var bookmarkController = {

    index : function(){
      //get user and password?
      //otherwise, check local storage?
      //if no user, show login modal?
      //otherwise, load bookmarks
    },

    getUserInfo : function(context, next){
      console.log('in user info');
      requestData('../server.js', 'GET')
        .done(function(data, status, xhr) {
          bookmarkController.urlData = JSON.parse(urlData);
          context.userBookmarks = bookmarkController.urlData;
          console.log('status: ' + status);
          console.log('data: ' + data);
          console.log('xhr: ' + xhr);
          console.log(bookmarkController.urlData);
        })
        .fail(function(data, message, xhr) {
          console.log('status: ' + status);
          console.log('data: ' + data);
          console.log('xhr: ' + xhr);
        });
      next();
    },

    requestData : function(url, type) {
      return $.ajax({
        url: url,
        type: type
      });
    }



    // index : function(context, next) {
    //   var self = bookmarkController;
    //   console.log(context);
    //
    //   //check if projectdata state exists
    //   if(context.state.bookmarkData) {
    //     self.projectdata = context.state.bookmarkData;
    //     next();
    //   } else {
    //
    //   //fetch the xhr header to compare etags
    //     self.fetch('../server.js', 'HEAD')
    //         .done(function(response, status, xhr){
    //           var etag = xhr.getResponseHeader('Etag');
    //           var storedEtag = self.loadFromLocalStorage('Etag');
    //
    //           //if what is in local storage is the same, then fetch from local storage
    //           if(etag === storedEtag){
    //             context.state.bookmarkData = self.loadFromLocalStorage('bookmarkData');
    //             context.save();
    //             self.bookmarkData = context.state.bookmarkData;
    //             next();
    //
    //           //if they don't match, or nothing stored, load from the data file
    //           } else {
    //             self.fetchFromGithub('../server.js', 'GET') //call to api
    //                 .done(function(response, status, xhr){
    //                   var repos = { data: response };
    //                   context.state.bookmarkData = repos.bookmarkData;
    //                   context.save();
    //                   self.bookmarkData = context.state.bookmarkData;
    //                   self.saveToLocalStorage('bookmarkData', self.bookmarkData);
    //                   self.saveToLocalStorage('Etag', etag);
    //                   next();
    //                 })
    //                 .fail(function(){ //if this fails, load up 'old' stuff from localstorage
    //                   context.state.bookmarkData = self.loadFromLocalStorage('bookmarkData');
    //                   context.save();
    //                   self.bookmarkData = context.state.bookmarkData;
    //                   next();
    //                 });
    //           };
    //         })
    //         .fail(function(){
    //           context.state.bookmarkData = [];
    //           context.save();
    //           self.bookmarkData = context.state.bookmarkData;
    //           next();
    //         });
    //   }
    // },

  };

  module.bookmarkController = bookmarkController;
})(window);
