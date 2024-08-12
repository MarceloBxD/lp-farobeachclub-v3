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
var react_1 = require("react");
var CloseIcon = function (props) {
    return (react_1["default"].createElement("svg", __assign({ width: "100%", height: "100%", viewBox: "0 0 48 48", fill: "none" }, props),
        react_1["default"].createElement("circle", { cx: "24", cy: "24", r: "22", stroke: "black" }),
        react_1["default"].createElement("path", { d: "M14.5607 12.4393C13.9749 11.8536 13.0251 11.8536 12.4393 12.4393C11.8536 13.0251 11.8536 13.9748 12.4393 14.5606L21.8789 24L12.4393 33.4393C11.8536 34.0252 11.8536 34.9748 12.4393 35.5607C13.0251 36.1464 13.9749 36.1464 14.5607 35.5607L24.0002 26.1213L33.4394 35.5604C34.0251 36.1461 34.9749 36.1461 35.5607 35.5604C36.1464 34.9746 36.1464 34.0249 35.5607 33.4391L26.1215 24L35.5607 14.5609C36.1464 13.9751 36.1464 13.0253 35.5607 12.4396C34.9749 11.8538 34.0251 11.8538 33.4394 12.4396L24.0002 21.8787L14.5607 12.4393Z", fill: "black" })));
};
exports["default"] = CloseIcon;
