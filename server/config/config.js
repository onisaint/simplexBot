var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 7777
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};