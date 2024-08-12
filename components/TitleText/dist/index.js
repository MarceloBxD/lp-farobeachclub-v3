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
var components_1 = require("@/components");
var react_1 = require("react");
var Texts_1 = require("../Texts");
var link_1 = require("next/link");
var styles_module_scss_1 = require("./styles.module.scss");
var TitleText = function (_a) {
    var button = _a.button, _b = _a.texts, title = _b.title, description = _b.description, className = _a.className, style = _a.style, inverse = _a.inverse;
    var buttonContent = function (item, index) {
        var button = (react_1["default"].createElement(components_1.Button, { icon: item.icon, variant: item.variant, openBooking: item.openBooking }, item.children));
        if (!!item.link) {
            return (react_1["default"].createElement(link_1["default"], { key: index, href: item.link }, button));
        }
        return button;
    };
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].container + " " + className, style: __assign({}, style) },
        react_1["default"].createElement("div", { style: {
                padding: inverse ? "0 24px 0 5rem" : "0 5rem 0 24px"
            } },
            react_1["default"].createElement(Texts_1.Title, null, title),
            !!description && description,
            button
                ? Array.isArray(button)
                    ? button.map(function (item, index) { return buttonContent(item, index); })
                    : buttonContent(button, 0)
                : null)));
};
exports["default"] = TitleText;
