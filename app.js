var express = require('express'),
    app = express();

app.use(express.static('www'));


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.set('port', process.env.PORT || 8100);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});