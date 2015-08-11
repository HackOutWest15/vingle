(function(app){
    app.controller('playbackController', function($scope,$window,$rootScope){
        $scope.lines = $rootScope.lines;
    });
}(angular.module('spotchat')));
