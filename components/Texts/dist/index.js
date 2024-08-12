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
exports.Caption = exports.Text = exports.Description = exports.Subtitle = exports.Title = void 0;
var react_1 = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
var fonts_1 = require("@/app/fonts");
var checkFontFamily = function (family) {
    if (family === "Montserrat") {
        return fonts_1.montserrat.style;
    }
    else if (family === "Termina Test") {
        return fonts_1.terminaTest.style;
    }
};
exports.Title = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "black" : _b, _c = _a.weight, weight = _c === void 0 ? 400 : _c, _d = _a.family, family = _d === void 0 ? "Montserrat" : _d, props = __rest(_a, ["children", "color", "weight", "family"]);
    return (react_1["default"].createElement("h1", __assign({}, props, { className: "" + styles_module_scss_1["default"].title, style: __assign(__assign({ color: color, fontWeight: weight }, checkFontFamily(family)), props.style) }), children));
};
exports.Subtitle = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "black" : _b, _c = _a.weight, weight = _c === void 0 ? 400 : _c, _d = _a.family, family = _d === void 0 ? "Montserrat" : _d, props = __rest(_a, ["children", "color", "weight", "family"]);
    return (react_1["default"].createElement("h2", __assign({}, props, { className: "" + styles_module_scss_1["default"].subtitle, style: __assign(__assign({ fontWeight: weight, color: color }, checkFontFamily(family)), props.style) }), children));
};
exports.Description = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "black" : _b, _c = _a.weight, weight = _c === void 0 ? 400 : _c, _d = _a.family, family = _d === void 0 ? "Montserrat" : _d, _e = _a.wrap, wrap = _e === void 0 ? true : _e, props = __rest(_a, ["children", "color", "weight", "family", "wrap"]);
    return (react_1["default"].createElement("h3", __assign({}, props, { className: "" + styles_module_scss_1["default"].description, style: __assign(__assign({ fontWeight: weight, color: color, whiteSpace: wrap ? "pre-wrap" : "nowrap" }, checkFontFamily(family)), props.style) }), children));
};
exports.Text = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "black" : _b, _c = _a.weight, weight = _c === void 0 ? 400 : _c, _d = _a.family, family = _d === void 0 ? "Montserrat" : _d, props = __rest(_a, ["children", "color", "weight", "family"]);
    return (react_1["default"].createElement("p", __assign({}, props, { className: "" + styles_module_scss_1["default"].text, style: __assign(__assign({ fontWeight: weight, color: color, overflowWrap: 'break-word', hyphens: "manual" }, checkFontFamily(family)), props.style) }), children));
};
exports.Caption = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "black" : _b, _c = _a.weight, weight = _c === void 0 ? 400 : _c, _d = _a.family, family = _d === void 0 ? "Montserrat" : _d, _e = _a.wrap, wrap = _e === void 0 ? true : _e, props = __rest(_a, ["children", "color", "weight", "family", "wrap"]);
    return (react_1["default"].createElement("p", __assign({}, props, { className: "" + styles_module_scss_1["default"].caption, style: __assign(__assign({ fontWeight: weight, color: color, whiteSpace: wrap ? "pre-wrap" : "nowrap" }, checkFontFamily(family)), props.style) }), children));
};
