var expect = require('chai').expect,
    path = require('path'),
    req = require('req-from'),
    required = require('.');

it('should prepare path for require', () => {
    var pathStr = 'index.js';
    expect(() => require(pathStr)).to.throw();
    expect(() => require(required(pathStr))).not.to.throw();
});

it('should work with absolute path', () => {
    var pathStr = path.resolve('index.js'); // it's absolute now
    pathStr = required(pathStr); // it's still absolute
    expect(require(pathStr)).to.eql(required);
});

it('should work with .. like path', () => {
    var pathStr = path.relative('..', 'index.js'); // required-path/index.js
    pathStr = required(pathStr); // ./required-path/index.js
    // use req from parent dir
    expect(req(path.resolve('..'), pathStr)).to.eql(required);
});

it('should work with strings only', () => {
    expect(() => required('42')).not.to.throw(/Provide/);
    expect(() => required(path)).to.throw(/Provide/);
    expect(() => required(undefined)).to.throw(/Provide/);
    expect(() => required(true)).to.throw(/Provide/);
    expect(() => required(false)).to.throw(/Provide/);
    expect(() => required(42)).to.throw(/Provide/);
    expect(() => required(null)).to.throw(/Provide/);
});
