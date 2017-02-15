required-path
=============

Handy helper to prepare your string for require().

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

