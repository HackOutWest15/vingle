(function (app) {
    app.factory('playbackSketch', function ($state, $rootScope) {
        return function (sketch) {
            var data = $rootScope.lines;
            console.log(data.length,data);
            var source = Rx.Observable.generateWithAbsoluteTime(
                1,
                function (x) {
                    return x < data.length;
                },
                function (x) {
                    return x + 1;
                },
                function (x) {
                    return data[x];
                },
                function (x) {
                    return Date.now() + data[x].timestamp;
                }
            ).timeInterval();

            var subscription = source.subscribe(
                function (x) {
                    console.log('Next: ', x);
                },
                function (err) {
                    console.log('Error: ' + err);
                },
                function () {
                    console.log('Completed');
                });
        };
    });
}(angular.module('spotchat')));