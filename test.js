var expect = require('expect.js');
var sinon = require('sinon');
var rewire = require('rewire');

var app = rewire('./myUtil.js');

var fakeContext = {
  getVariable: function(s) {}
}

var contextGetVariableMethod;

beforeEach(function () {
  contextGetVariableMethod = sinon.stub(fakeContext, 'getVariable');
});

afterEach(function() {
  contextGetVariableMethod.restore();
});

describe('feature: add', function() {
  it('should add two numbers', function() {
    contextGetVariableMethod.withArgs('c').returns(3);
    app.__set__('context', fakeContext);

    var add = app.__get__('add');
    expect(add(1,1)).to.equal(6);
  });
});
