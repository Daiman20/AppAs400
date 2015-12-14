'use strict';
var environment = process.env.NODE_ENV || 'dev';
var connectionPool = {
    production:{},
    development:{
        host: 'pub1.de',
        user: 'ARIVERA',
        password: 'PRUEBA1122'
    }
};

module.exports = (environment === 'dev') ? connectionPool.development : connectionPool.production;
