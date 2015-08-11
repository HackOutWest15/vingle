(function (app) {
    var lines = [];
    app.factory('mySketch', function ($state) {
        return function (sketch) {
            var lastTouch = null;
            var img;
            var startTime = new Date().getTime();
            sketch.setup = function () {
                sketch.createCanvas(sketch.windowWidth, sketch.windowWidth);
                img = sketch.loadImage("/img/1993photo.jpg");
            };
            sketch.draw = function () {

                sketch.background(0);
                sketch.fill(255);
                sketch.stroke(255);

                sketch.image(img, 0, 0, sketch.width, sketch.height);
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    sketch.strokeWeight(strokeWeight(line.width));
                    sketch.line(line.previous.x * getWidth(), line.previous.y * getHeight(), line.present.x * getWidth(), line.present.y * getHeight());
                }
            };
            sketch.touchStarted = function () {
                lastTouch = null;
            };
            sketch.touchMoved = function () {
                var touch = {width: 1, timestamp:getAudioTime(), present: {x: sketch.touchX / getWidth(), y: sketch.touchY / getHeight()}};
                if (lastTouch) {
                    touch.previous = lastTouch.present;
                    lines.push(touch);
                }
                lastTouch = touch;
                // prevent default
                return false;
            }
            sketch.windowResized = function () {

                sketch.resizeCanvas(sketch.windowWidth, sketch.windowWidth);
            }
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