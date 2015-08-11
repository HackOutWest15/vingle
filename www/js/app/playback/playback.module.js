(function(app){
    app.config(function($stateProvider){
        $stateProvider.state('playback', {
            url: '/playback',
            controller: 'playbackController',
            templateUrl: 'js/app/playback/playback.html'
        });
    });
}(angular.module('spotchat')));
