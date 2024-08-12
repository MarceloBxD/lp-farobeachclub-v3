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
exports.__esModule = true;
var react_1 = require("react");
var ArrowRightIcon = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? "#fff" : _b, props = __rest(_a, ["fill"]);
    return (react_1["default"].createElement("svg", __assign({ width: "100%", height: "100%", viewBox: "0 0 24 20", fill: "none" }, props),
        react_1["default"].createElement("path", { d: "M13.7215 0.254403C13.393 0.593607 13.393 1.16765 13.7215 1.50685L21.075 9.0998H0.859174C0.379047 9.0998 0 9.49119 0 9.98695C0 10.4827 0.379047 10.8741 0.859174 10.8741H21.075L13.7215 18.4932C13.393 18.8324 13.393 19.4064 13.7215 19.7456C14.05 20.0848 14.6059 20.0848 14.9345 19.7456L23.7536 10.6132C24.0821 10.274 24.0821 9.69993 23.7536 9.36073L14.9345 0.254403C14.6059 -0.084801 14.05 -0.084801 13.7215 0.254403Z", fill: fill })));
};
exports["default"] = ArrowRightIcon;
