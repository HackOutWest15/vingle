(function (app) {
    app.factory('playbackSketch', function ($state, $rootScope) {
        return function (sketch) {
            var data = _.sortBy($rootScope.lines,function(e){return e.timestamp; });
            var img;
            var lines=[];
            var start = Date.now();
            var source = Rx.Observable.generateWithAbsoluteTime(
                1,
                function (x) {
                    return x < data.length;
                },
                function (x) {
                    return x + 1;
                },
                function (x) {
                    return x;
                },
                function (x) {
                    return start + data[x].timestamp;
                }
            ).timeInterval();

            var subscription = source.subscribe(
                function (x) {
                    lines.push(data[x.value]);
                },
                function (err) {
                    console.log('Error: ' + err);
                },
                function () {
                    console.log('Completed');
                });
            sketch.setup = function () {
                sketch.createCanvas(sketch.windowWidth, sketch.windowWidth);
                img = sketch.loadImage($rootScope.track.album.images[0].url);
            };
            sketch.draw = function () {
                sketch.background(0);
                sketch.fill(255);
                sketch.stroke(255);

                sketch.image(img, 0, 0, sketch.width, sketch.height);
                if (!lines) return;
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    sketch.strokeWeight(strokeWeight(line.width));
                    sketch.line(line.previous.x * getWidth(), line.previous.y * getHeight(), line.present.x * getWidth(), line.present.y * getHeight());
                }
            };
            sketch.windowResized = function () {
                sketch.resizeCanvas(sketch.windowWidth, sketch.windowWidth);
            };
            function getHeight() {
                return getWidth();
            }

            function getWidth() {
                return sketch.width;
            }

            function strokeWeight(percentage) {
                return getWidth() * (percentage / 100);
            }
            function getAudioTime() {
                return new Date().getTime()-startTime;
            }
        };
    });
}(angular.module('spotchat')));
