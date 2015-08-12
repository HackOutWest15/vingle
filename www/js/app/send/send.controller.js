(function (app) {
    app.controller('sendController', function ($scope, $rootScope, APIHandler, $state,ngFB) {
        ngFB.api({
            path: '/me',
            params: {fields:'friends'}
        }).then(function(user){
            user.friends = user.friends.data;
            window.localStorage.currentUser = JSON.stringify(user);
            $rootScope.currentUser = user;
            init();
        });
        if (!$rootScope.lines || !$rootScope.track)
            $state.go('search');

        function init(){
            $scope.choosenFriends = [];
            console.log($scope.user.friends);
            $scope.user = $rootScope.currentUser;
            $scope.user.friends = $scope.user.friends.map(function (friend) {
                friend.choosen = false;
                return friend;
            });
            $scope.friends = $scope.user.friends

        }

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
                $scope.friends = $scope.user.friends.filter(function (f) {
                    return f.name.toLowerCase().match(regex);
                });
            } else {
                if ($scope.user)
                $scope.friends = $scope.user.friends;
            }
        });

        $scope.send = function () {
            APIHandler.postMessage($scope.choosenFriends).then(function (response) {
                $rootScope.track = undefined;
                $rootScope.lines = undefined;
                // go to home screen
                $state.go('outbox');
            });

        }

        $scope.goToSearch = function(){
          $state.go('search');
        }
    });
}(angular.module('spotchat')));
