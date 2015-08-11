(function(app){
  app.controller('sendController', function($scope, $rootScope){
    var choosenFriends = [];

    $scope.user = $rootScope.currentUser;
    $scope.user.friends = $scope.user.friends.map(function(friend){
      friend.choosen = false;
      return friend;
    })

    $scope.chooseFriend = function(friend){
      console.log("Clicked on " + friend.name);
      friend.choosen = !friend.choosen;
    }
  });
}(angular.module('spotchat')))
