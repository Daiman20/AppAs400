'use strict';

var config = require('../config');
var fs = require('fs');
var path = require('path');
var models = {};
var connection = require('node-jt400').pool(config.connection);
console.log(connection);

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function (file) {
        var modelName = /^(\w*)Model.js/g.exec(file);
        modelName = (modelName[1] ? modelName[1] : null);
        if (modelName) {
            console.log('loading ' + modelName + ' model.');
            var model = require(path.join(__dirname, file))({
                connection: connection,
                models: models
            });
            models[modelName] = model;
        }
    });
    
console.log('Done loading models...');
module.exports = models;
