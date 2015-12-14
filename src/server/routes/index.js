var _ = require('lodash');
var bodyParser = require('body-parser');

module.exports = function (app){
    app.use(bodyParser.json());
    
    app.use(
        '/api/users',
        require('./api/userRoutes')
    );
     
     app.use(
        '/api/acounts',
        require('./api/acountRoutes')
    );
    
   
     app.use(
        '/api/services',
        require('./api/serviceRoutes')
    );
    
    app.get('/ping', function (req, res, next) {
        res.send('pong');
    });
};

