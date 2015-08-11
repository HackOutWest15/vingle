(function(app){
  app.controller('loginController', function($scope, APIHandler){
    $scope.login = APIHandler.login;
  });
}(angular.module('spotchat')))
