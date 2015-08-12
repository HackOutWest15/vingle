(function(app){
    app.controller('playbackController', function($scope,$window,$rootScope){
        $scope.lines = $rootScope.lines;
        console.log($rootScope.playback.track);
        $scope.track = $rootScope.playback.track;
    });
}(angular.module('spotchat')));
