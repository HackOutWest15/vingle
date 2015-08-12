(function(app){
    app.controller('playbackController', function($scope,$sce,$window,$rootScope){
        $scope.lines = $rootScope.lines;
        console.log($rootScope.playback.track);
        $scope.track = $rootScope.playback.track;
        $scope.track.preview_urlTrusted = $sce.trustAsResourceUrl($scope.track.preview_url);
    });
}(angular.module('spotchat')));
