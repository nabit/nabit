(function (module) {

  function User(id, username, bookmarks) {
    this.id = id;
    this.username = username;
    this.bookmarks = bookmarks;
  }
  
  module.User = User;
})(window);
