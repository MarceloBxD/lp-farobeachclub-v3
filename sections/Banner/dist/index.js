"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/legacy/image");
var Logo_1 = require("@/components/Logo");
var styles_module_scss_1 = require("./styles.module.scss");
var Video_1 = require("@/components/Video");
var ArrowDownBanner_1 = require("@/components/ArrowDownBanner");
var Banner = function (_a) {
    var img = _a.img;
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].wrapper },
        !img ? (react_1["default"].createElement(Video_1["default"], null)) : (react_1["default"].createElement(image_1["default"], { src: img, alt: "banner", sizes: "100vw", layout: "fill", objectFit: "cover", quality: 100 })),
        react_1["default"].createElement(Logo_1["default"], { className: styles_module_scss_1["default"].logo_wrapper }),
        react_1["default"].createElement(ArrowDownBanner_1.ArrowDownBanner, null)));
};
exports["default"] = Banner;
