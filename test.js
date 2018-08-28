var expect = require('expect.js');
var rewire = require('rewire');

var app = rewire('./myUtil.js');

describe('feature: add', function() {
  it('should add two numbers', function() {
    var add = app.__get__('add');
    expect(add(1,1)).to.equal(2);
  });
});
