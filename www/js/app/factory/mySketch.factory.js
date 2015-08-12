(function (app) {
    app.factory('mySketch', function ($state, $rootScope) {
        return function (sketch) {
            var lines=[];
            var lastTouch = null;
            var img;
            var startTime = new Date().getTime();
            var audio = document.getElementById('audioDraw');

            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            var context = new AudioContext();

            sketch.setup = function () {
                sketch.createCanvas(sketch.windowWidth, sketch.windowWidth);
                img = sketch.loadImage($rootScope.track.album.images[0].url);
                audio.play();
                $rootScope.lines = lines;
            };

            $rootScope.mySketchDone=false;
            sketch.draw = function () {
                if (!$rootScope.mySketchDone && audio.currentTime == audio.duration){
                    $rootScope.mySketchDone=true;
                    audio.pause();
                    $state.go('send');
                }

                sketch.background(0);
                sketch.fill(255);
                sketch.stroke(255);

                sketch.image(img, 0, 0, sketch.width, sketch.height);

                var margin = (window.innerHeight - sketch.height)/2;
                document.getElementById('sketch-container').style.paddingTop = margin-44+"px";
                if (!lines) return;
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
                return Math.floor(audio.currentTime*1000);
            }
        };
    });
}(angular.module('spotchat')));
