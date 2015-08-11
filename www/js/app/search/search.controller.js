(function(app){
  app.controller('searchController', function($scope, ngFB){
    // start
    ngFB.api({
      path: '/me',
      params: {fields:'friends'}
    }).then(function(user){
      console.log(user);
    })
  });
}(angular.module('spotchat')))
