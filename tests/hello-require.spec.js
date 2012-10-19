require([
    "../src/hello"
],
function( o ) {

    describe('say hello', function() {
        it('should say hello', function() {
            expect(o.hello()).toBe('hello world');
        });
    });
    
});