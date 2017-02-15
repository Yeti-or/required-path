var path = require('path');
var assert = require('assert');

/**
 * Prepare string that contains path for require()
 *
 * @example
 * ```js
 * var requiredPath = require('required-path');
 * var file = 'file.js';
 *
 * try {
 *   require(file);
 * } catch(err) {
 *   err; → // "Error: Cannot find module 'file.js'"
 * }
 *
 * var prepared = requiredPath(file);
 * require(prepared); → // now it's okay
 * ```
 * @public
 * @param {String} pathStr - path that will be prepared for require
 * @returns {String}
 */

module.exports = function(pathStr) {
    assert(typeof(pathStr) === 'string', 'Provide path as String.');
    if (path.isAbsolute(pathStr)) {
        return pathStr;
    } else {
        // we don't need path.sep check tests in windows
        return './' + pathStr;
    }
};
