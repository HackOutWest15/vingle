(function(app){
  app.controller('sendController', function($scope, $rootScope){
    var choosenFriends = [];

    $scope.user = $rootScope.currentUser;
    $scope.user.friends = $scope.user.friends.map(function(friend){
      friend.choosen = false;
      return friend;
    });
    $scope.friends = $scope.user.friends


    $scope.chooseFriend = function(friend){
      console.log("Clicked on " + friend.name);
      friend.choosen = !friend.choosen;
    }

    $scope.$watch('searchQuery', function(newValue, oldValue){
      if(newValue){
        var regex = new RegExp(".*"+newValue.toLowerCase()+".*","g");
        $scope.friends = $scope.user.friends.filter(function(f){
          return f.name.toLowerCase().match(regex);
        });
      }else{
        $scope.friends = $scope.user.friends;
      }
    });
  });
}(angular.module('spotchat')))
