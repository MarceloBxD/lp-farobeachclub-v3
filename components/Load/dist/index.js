"use strict";
exports.__esModule = true;
var tokens_1 = require("@/data/tokens");
var react_1 = require("react");
var react_loading_1 = require("react-loading");
var Load = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "spin" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.size, size = _d === void 0 ? "20%" : _d;
    var colorLoad = color === "primary"
        ? tokens_1.Tokens.colors.brand.beachclub
        : color === "secondary"
            ? tokens_1.Tokens.colors.brand.rooftop
            : color === "tertiary"
                ? tokens_1.Tokens.colors.brand.beachclub_rooftop
                : color;
    return (react_1["default"].createElement(react_loading_1["default"], { type: variant, color: colorLoad, height: size, width: size }));
};
exports["default"] = Load;
