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
var navigation_1 = require("next/navigation");
var Texts_1 = require("../Texts");
var styles_module_scss_1 = require("./styles.module.scss");
var NavItem = function (_a) {
    var className = _a.className, item = _a.item, index = _a.index, hoverFunc = _a.hoverFunc, props = __rest(_a, ["className", "item", "index", "hoverFunc"]);
    var pathname = navigation_1.usePathname();
    var isPath = pathname === item.href;
    return (react_1["default"].createElement("a", __assign({}, props, { href: item.href, key: index, className: styles_module_scss_1["default"].link + " " + className, style: {
            backgroundColor: isPath ? "rgba(255,255,255,0.1)" : "transparent"
        } }),
        react_1["default"].createElement(Texts_1.Description, { wrap: false, color: "#fff" }, item.title)));
};
exports["default"] = NavItem;
