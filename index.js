var path = require('path');

module.exports = function(pathStr) {
    if (path.isAbsolute(pathStr) {
        return pathStr;
    } else {
        return '.' + path.sep + pathStr;
    }
};
