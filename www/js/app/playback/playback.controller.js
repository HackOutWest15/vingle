(function(app){
    app.controller('playbackController', function($scope,$window,$rootScope){
        $scope.lines = $rootScope.lines;
        console.log($rootScope.lines);
    });
}(angular.module('spotchat')));
