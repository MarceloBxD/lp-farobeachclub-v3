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
var styles_module_scss_1 = require("./styles.module.scss");
var Wrapper = function (_a) {
    var children = _a.children, _b = _a.bgColor, bgColor = _b === void 0 ? "transparent" : _b, anchor = _a.anchor, contentStyle = _a.contentStyle, contentClass = _a.contentClass, props = __rest(_a, ["children", "bgColor", "anchor", "contentStyle", "contentClass"]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { style: {}, id: anchor }),
        react_1["default"].createElement("div", __assign({ className: styles_module_scss_1["default"].container + " " + (contentClass === null || contentClass === void 0 ? void 0 : contentClass.container) }, props, { style: __assign({ backgroundColor: bgColor }, props.style) }),
            react_1["default"].createElement("div", { className: styles_module_scss_1["default"].content + " " + (contentClass === null || contentClass === void 0 ? void 0 : contentClass.content), style: __assign({}, contentStyle) }, children))));
};
exports["default"] = Wrapper;
