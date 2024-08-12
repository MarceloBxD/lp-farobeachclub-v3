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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.calculateScaleY = void 0;
var react_1 = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
var Span_1 = require("./component/Span");
exports.calculateScaleY = function (index, muted) {
    var baseScale = 0.2; // Base scale for all spans
    var scaleMultiplier = 2; // Multiplier for scale
    var middleSpanScale = 2.5; // Larger scale for the middle span
    if (muted)
        return baseScale;
    // Calculate scale based on index (with the middle span having a larger scale)
    var scale = index === 2 ? baseScale * middleSpanScale : baseScale * scaleMultiplier;
    return scale;
};
var SoundWave = function (_a) {
    var muted = _a.muted, props = __rest(_a, ["muted"]);
    return (react_1["default"].createElement("div", __assign({ className: styles_module_scss_1["default"].container }, props), __spreadArrays(Array(5)).map(function (_, index) { return (react_1["default"].createElement(Span_1["default"], { key: index, index: index, muted: muted })); })));
};
exports["default"] = SoundWave;
