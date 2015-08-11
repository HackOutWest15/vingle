(function(app){
  app.controller('drawController', function($scope, $rootScope){
    $scope.hej = "tja";
    console.log($rootScope.track); 
  });
}(angular.module('spotchat')))
