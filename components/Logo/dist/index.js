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
var banner_logo_png_1 = require("@/assets/imgs/banner-logo.png");
var faro_logo_preta_png_1 = require("@/assets/imgs/faro-logo-preta.png");
var faro_logo_azul_png_1 = require("@/assets/imgs/faro-logo-azul.png");
var image_1 = require("next/legacy/image");
var Logo = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "white" : _b, props = __rest(_a, ["color"]);
    var logoSrc = color === "white" ? banner_logo_png_1["default"] : color === 'black' ? faro_logo_preta_png_1["default"] : faro_logo_azul_png_1["default"];
    return (react_1["default"].createElement("div", __assign({}, props),
        react_1["default"].createElement(image_1["default"], { src: logoSrc, alt: "Faro Beach Club", quality: 100, style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
            } })));
};
exports["default"] = Logo;
