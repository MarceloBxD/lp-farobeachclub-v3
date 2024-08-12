"use client";
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
var Texts_1 = require("../Texts");
var styles_module_scss_1 = require("./styles.module.scss");
var react_spring_1 = require("react-spring");
var data_button_1 = require("./data_button");
var Load_1 = require("../Load");
var AppContext_1 = require("@/context/AppContext");
/**
 * @name Button
 * @description Componente de botão
 * @param {string} variant - variant of button
 * @param {string} children - text of button
 * @param {React.ReactNode} icon - icon of button
 * @param {string} textColor - color of text
 * @param {boolean} wrap - wrap text
 * @param {function} onClick - function of button
 * @param {string} link - link of button
 * @param {LoadProps} load - load of button
 */
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "brand" : _b, children = _a.children, icon = _a.icon, _c = _a.wrap, wrap = _c === void 0 ? false : _c, link = _a.link, _d = _a.openBooking, openBooking = _d === void 0 ? false : _d, load = _a.load, props = __rest(_a, ["variant", "children", "icon", "wrap", "link", "openBooking", "load"]);
    var setBookingActive = AppContext_1.useApp().setBookingActive;
    var _e = react_1["default"].useState(false), btnLoading = _e[0], setBtnLoading = _e[1];
    var _f = react_spring_1.useSpring(function () { return ({
        backgroundColor: data_button_1.button_theme[variant].bgColor,
        color: data_button_1.button_theme[variant].color,
        borderColor: data_button_1.button_theme[variant].borderColor,
        config: react_spring_1.config.stiff
    }); }), hoverAnimation = _f[0], set = _f[1];
    var changeHover = function (hover) {
        var varia = hover ? data_button_1.button_theme[variant].hover : data_button_1.button_theme[variant];
        set({
            backgroundColor: varia.bgColor,
            color: varia.color,
            borderColor: varia.borderColor
        });
    };
    var fakeLoading = function () {
        setBtnLoading(true);
        setTimeout(function () {
            setBtnLoading(false);
        }, 2000);
    };
    var onMouseEnter = function () {
        changeHover(true);
    };
    var onMouseLeave = function () {
        changeHover(false);
    };
    var onClick = function () {
        if (openBooking) {
            setBookingActive(true);
        }
        else {
            fakeLoading();
            props.onClick && props.onClick();
        }
    };
    var button = (react_1["default"].createElement(react_spring_1.animated.button, __assign({}, props, { className: styles_module_scss_1["default"].button, style: __assign(__assign({}, props.style), hoverAnimation), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onClick: onClick }), btnLoading && load ? (react_1["default"].createElement("div", { style: {
            width: 21
        } },
        react_1["default"].createElement(Load_1["default"], { variant: load.variant, color: 'inherit', size: "100%" }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Texts_1.Description, { style: {
                color: "inherit"
            }, wrap: wrap }, children),
        icon && react_1["default"].createElement("div", { className: styles_module_scss_1["default"].icon }, icon)))));
    if (link)
        return (react_1["default"].createElement("a", { href: link, target: "_blank" }, button));
    return button;
};
exports["default"] = Button;
