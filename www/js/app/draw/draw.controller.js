(function(app){
  app.controller('drawController', function($scope,$sce,$rootScope){
    $scope.track.preview_urlTrusted = $sce.trustAsResourceUrl($rootScope.track.preview_url);

    var audio = document.getElementById('audioPlayback');
    $scope.music = {
      play: function(){
        audio.play();
      },
      pause: function(){
        audio.pause();
      }
    };
  });
}(angular.module('spotchat')));
