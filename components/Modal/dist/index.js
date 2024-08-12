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
exports.__esModule = true;
var AppContext_1 = require("@/context/AppContext");
var react_1 = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
var react_spring_1 = require("react-spring");
var Modal = function () {
    var _a = AppContext_1.useApp(), modalActive = _a.modalActive, setModalActive = _a.setModalActive;
    var animatedProps = react_spring_1.useSpring({
        from: {
            opacity: 0,
            visibility: "hidden"
        },
        to: {
            opacity: 1,
            visibility: "visible"
        },
        config: react_spring_1.config.stiff,
        reverse: !modalActive
    });
    return (react_1["default"].createElement(react_spring_1.animated.div, { className: styles_module_scss_1["default"].container, style: __assign({}, animatedProps) },
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].content },
            react_1["default"].createElement("header", { className: styles_module_scss_1["default"].header },
                react_1["default"].createElement("h1", null, "Modal"),
                react_1["default"].createElement("button", { onClick: function () { return setModalActive(null); } }, "X")))));
};
exports["default"] = Modal;
