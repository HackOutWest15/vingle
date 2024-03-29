(function (app) {
    app.controller('sendController', function ($scope, $rootScope, APIHandler, $state,ngFB) {
        $scope.choosenFriends = [];
        /*ngFB.api({
            path: '/me',
            params: {fields:'friends'}
        }).then(function(user){
            user.friends = user.friends.data;
            window.localStorage.currentUser = JSON.stringify(user);
            $rootScope.currentUser = user;
            init();
        });

        function init(){
            $scope.choosenFriends = [];

            $scope.user = $rootScope.currentUser;
            $scope.user.friends = $scope.user.friends.map(function (friend) {
                friend.choosen = false;
                return friend;
            });
            $scope.friends = $scope.user.friends
        }*/
        if (!$rootScope.lines || !$rootScope.track)
            $state.go('search');

        $scope.chooseFriend = function (friend) {
            console.log("Clicked on " + friend.name);
            friend.choosen = !friend.choosen;
            if (friend.choosen)
                $scope.choosenFriends.push(friend);
            else
                _.pull($scope.choosenFriends, friend);
        }

        $scope.$watch('searchQuery', function (newValue, oldValue) {
            if (newValue) {
                var regex = new RegExp(".*" + newValue.toLowerCase() + ".*", "g");
                $scope.friends = $rootScope.currentUser.friends.filter(function (f) {
                    return f.name.toLowerCase().match(regex);
                });
            } else {
                $scope.friends = $rootScope.currentUser.friends;
            }
        });

        $scope.send = function () {
            APIHandler.postMessage($scope.choosenFriends).then(function (response) {
                $rootScope.track = undefined;
                $rootScope.lines = [];
                // go to home screen
                $state.go('outbox');
            });

        }

        $scope.goToSearch = function(){
          $state.go('search');
        }
    });
}(angular.module('spotchat')));
