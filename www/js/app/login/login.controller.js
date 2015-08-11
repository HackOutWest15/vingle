(function(app){
  app.controller('loginController', function($scope, $rootScope){
    $scope.login = function(){
      console.log($rootScope.API_URL);
    }
  });
}(angular.module('spotchat')))
