<<<<<<< HEAD
(function(module) {
  var bookmarkController = {};

  bookmarkController.index = function() {
    // $('').hide();
    // $('').show();

    // repos.requestRepos(repoView.index);
=======
(function(module){

  var bookmarkController = {

    index : function(){
      requestData('../server.js', 'GET')
        .done(function() {
          bookmarkController.urlData = urlData;
          console.log(bookmarkController.urlData);
        });
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

>>>>>>> 790b4473f4182267b2a0767e4fb73cb0d73da0f4
  };

  module.bookmarkController = bookmarkController;
})(window);
