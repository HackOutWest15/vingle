(function(app){
    app.controller('playbackController', function($scope,$sce,$window,$rootScope, $state){
        $scope.lines = $rootScope.lines;
        console.log($rootScope.playback.track);
        $scope.track = $rootScope.playback.track;
        $scope.track.preview_urlTrusted = $sce.trustAsResourceUrl($scope.track.preview_url);

        var audio = document.getElementById('audioPlayback');
        $scope.timeLeft = 30;
        setInterval(function(){
          $scope.$apply(function(){
            console.log(audio.duration - audio.currentTime);
            $scope.timeLeft = Math.floor(audio.duration - audio.currentTime);
          });
        }, 1000)

        $scope.goBack = function(){
          $state.go($rootScope.previousState);
        }
    });
}(angular.module('spotchat')));
