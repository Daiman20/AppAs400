var express = require('express');
var app = express();
var environment = process.env.NODE_ENV || 'dev';
var port = process.env.PORT || 8000;
var path = require('path');
var config = require('./config');
var cors = require('cors');
//var models = require('./models');

/* ROUTES */
require('./routes')(app);
app.use(cors());

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);


/*
app.use(function (req, res, next) {
    console.log('appending models...');
    req.models = models;
    next();
});
*/

app.use(express.static('./src/client'));

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});
