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
var react_spring_1 = require("react-spring");
var __1 = require("../..");
var Span = function (_a) {
    var index = _a.index, muted = _a.muted;
    var springs = react_spring_1.useSpring({
        loop: { reverse: true },
        from: {
            scaleY: 0.1
        },
        to: {
            scaleY: !muted ? __1.calculateScaleY(index, muted) : 0.1
        },
        config: react_spring_1.config.stiff,
        delay: index * 50
    });
    return (react_1["default"].createElement(react_spring_1.animated.span, { style: __assign({}, springs) }));
};
exports["default"] = Span;
