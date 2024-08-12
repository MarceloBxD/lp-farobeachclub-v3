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
exports.__esModule = true;
var React = require("react");
function MenuIcon(props) {
    return (React.createElement("svg", __assign({ width: "100%", height: "100%", viewBox: "0 0 16 15", fill: "none" }, props),
        React.createElement("rect", { width: "16", height: "1", rx: "0.5", fill: "white" }),
        React.createElement("rect", { y: "7", width: "16", height: "1", rx: "0.5", fill: "white" }),
        React.createElement("rect", { y: "14", width: "16", height: "1", rx: "0.5", fill: "white" })));
}
exports["default"] = MenuIcon;
