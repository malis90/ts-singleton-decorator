"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonClass = void 0;
function SingletonClass(options) {
    options = __assign({ isSingleton: true }, options);
    return function (constructor) {
        var original = constructor;
        if (!options.isSingleton) {
            return constructor;
        }
        var fun = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (options.isSingleton) {
                if (constructor.prototype.Instance) {
                    return constructor.prototype.Instance;
                }
                else {
                    var instance = new (constructor.bind.apply(constructor, __spreadArray([void 0], args, false)))();
                    constructor.prototype.Instance = instance;
                    return instance;
                }
            }
            return new (constructor.bind.apply(constructor, __spreadArray([void 0], args, false)))();
        };
        fun.prototype = original.prototype;
        return fun;
    };
}
exports.SingletonClass = SingletonClass;
//# sourceMappingURL=singleton.js.map