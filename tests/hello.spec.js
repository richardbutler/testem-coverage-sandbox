/*global test, assert, hello*/

var o = typeof(window) !== "undefined" ? this : require( "../src/hello" );

describe('say hello', function() {
    it('should say hello', function() {
        expect(o.hello()).toBe('hello world');
    });
});