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
var react_spring_1 = require("react-spring");
var react_input_mask_1 = require("react-input-mask");
var fonts_1 = require("@/app/fonts");
var styles_module_scss_1 = require("./styles.module.scss");
var Input = function (_a) {
    var mask = _a.mask, label = _a.label, name = _a.name, type = _a.type, _b = _a.color, color = _b === void 0 ? "#000" : _b, _c = _a.font, font = _c === void 0 ? {
        family: "Montserrat",
        weight: 400,
        size: 16
    } : _c, rightIcon = _a.rightIcon, props = __rest(_a, ["mask", "label", "name", "type", "color", "font", "rightIcon"]);
    var _d = react_1["default"].useState(false), isFocused = _d[0], setIsFocused = _d[1];
    var inputRef = react_1.useRef(null);
    var handleInputFocus = function () {
        var _a;
        setIsFocused(true);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var handleInputBlur = function () {
        !props.value && setIsFocused(false);
    };
    var labelAnimation = react_spring_1.useSpring({
        from: {
            top: 0,
            fontSize: font.size
        },
        to: {
            top: isFocused || props.value ? -30 : -5,
            fontSize: isFocused || props.value ? font.size - 3 : font.size
        }
    });
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].wrapper, style: __assign({}, props.style) },
        label && (react_1["default"].createElement(react_spring_1.animated.label, { className: styles_module_scss_1["default"].label + " " + fonts_1.montserrat.className, style: __assign(__assign({}, labelAnimation), { pointerEvents: "none" }), onClick: handleInputFocus }, label)),
        react_1["default"].createElement(react_input_mask_1["default"], { mask: mask || "", maskChar: " ", value: props.value, onChange: props.onChange, className: styles_module_scss_1["default"].input, inputMode: "text", style: {
                borderBottom: "1px solid " + color,
                color: color
            }, inputRef: inputRef, autoComplete: "off", type: type, name: name, onFocus: handleInputFocus, onBlur: handleInputBlur }),
        rightIcon && react_1["default"].createElement("div", { className: styles_module_scss_1["default"].icon }, rightIcon)));
};
exports["default"] = Input;
