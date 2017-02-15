required-path
=============

Handy helper to prepare your string for require().

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]
[![Windows Status][appveyor-img]][appveyor]
[![Coverage Status][coverage-img]][coveralls]
[![Dependency Status][dependency-img]][david]

[npm]:            https://www.npmjs.org/package/required-path
[npm-img]:        https://img.shields.io/npm/v/required-path.svg

[travis]:         https://travis-ci.org/Yeti-or/required-path
[test-img]:       https://img.shields.io/travis/Yeti-or/required-path.svg?label=tests

[appveyor]:       https://ci.appveyor.com/project/Yeti-or/required-path
[appveyor-img]:   http://img.shields.io/appveyor/ci/Yeti-or/required-path.svg?style=flat&label=windows

[coveralls]:      https://coveralls.io/r/Yeti-or/required-path
[coverage-img]:   https://img.shields.io/coveralls/Yeti-or/required-path.svg

[david]:          https://david-dm.org/yeti-or/required-path
[dependency-img]: http://img.shields.io/david/yeti-or/required-path.svg

The emergence of this module is due to the fact that some methods of [path] module could return “un-required” path.

For example:

`path.relative('foo/bar', 'foo/baz.js')` will return `'../baz.js'`, and we could require it.

But `path.relative('foo', 'foo/bar/baz.js')` will return  `'bar/baz.js'`, and such path would cause error in require.

[path]: https://nodejs.org/dist/latest-v6.x/docs/api/path.html


Usage
-----

```js
var requiredPath = require('required-path');
var file = 'file.js';

try {
  require(file);
} catch(err) {
  err; → // "Error: Cannot find module 'file.js'"
}

var prepared = requiredPath(file);
require(prepared); → // now it's okay
```

License
-------

Code released under the [MIT License](LICENSE.txt).
