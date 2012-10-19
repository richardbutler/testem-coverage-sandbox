(function() {
    if (typeof(module) === "undefined") {
        if (typeof(define) === "function" && define.amd) {
            var mod, module;
            define(function(require, exports, module) {
                mod = { exports: exports };
            });
            module = mod;
        }
    }
    
    (function(exports) {
        exports.hello = function(){
            return "hello world";
        }
    })(typeof(module) !== "undefined" ? module.exports : this);
})();
