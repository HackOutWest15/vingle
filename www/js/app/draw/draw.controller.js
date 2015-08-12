(function(app){
  app.controller('drawController', function($scope,$sce,$rootScope, $state){
    $scope.track.preview_urlTrusted = $sce.trustAsResourceUrl($rootScope.track.preview_url);

    var audio = document.getElementById('audioDraw');
    $scope.music = {
      play: function(){
        audio.play();
      },
      pause: function(){
        audio.pause();
      },
      playing: function(){
        return !audio.paused;
      }
    };

    $scope.goToSearch = function(){
      audio.pause();
      $state.go('search');
    }
  });
}(angular.module('spotchat')));
