(function(exports) {
    exports.hello = function(){
        return "hello world";
    }
})(typeof(module) !== "undefined" ? module.exports : this);
