(function(app){
  app.controller('sendController', function($scope, $rootScope, APIHandler){
    $scope.choosenFriends = [];

    $scope.user = $rootScope.currentUser;
    $scope.user.friends = $scope.user.friends.map(function(friend){
      friend.choosen = false;
      return friend;
    });
    $scope.friends = $scope.user.friends


    $scope.chooseFriend = function(friend){
      console.log("Clicked on " + friend.name);
      friend.choosen = !friend.choosen;
      if(friend.choosen)
        $scope.choosenFriends.push(friend);
      else
        _.pull($scope.choosenFriends, friend);
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

    $scope.send = function(){
      APIHandler.postMessage($scope.choosenFriends);
    }
  });
}(angular.module('spotchat')))