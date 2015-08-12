(function (app) {
    app.controller('searchController', function ($scope, Spotify,$location, $rootScope, $state) {
        // start
        var recentTimer;
        $scope.$watch('searchInput', function (searchQuery) {
            if (searchQuery) {
                if (recentTimer) clearInterval(recentTimer);
                recentTimer = window.setTimeout(function () {
                    Spotify.search(searchQuery, 'track').then(function (data) {
                        $scope.tracks = data.tracks.items;
                        console.log(data);
                    });
                }, 500)
            }
        })
        $scope.logout = function(){
            $rootScope.currentUser=null;
            delete window.localStorage.currentUser;
            $location.path('/login');
        }
        $scope.chooseTrack = function (track) {
            $rootScope.track = track;
            $state.go('draw');
            console.log(track);
        }
    });
}(angular.module('spotchat')))
