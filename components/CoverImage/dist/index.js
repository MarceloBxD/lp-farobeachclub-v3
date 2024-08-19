"use strict";
exports.__esModule = true;
var image_1 = require("next/legacy/image");
var react_1 = require("react");
var Badge_1 = require("@/components/Badge");
var styles_module_scss_1 = require("./styles.module.scss");
var CoverImage = function (_a) {
    var alt = _a.alt, src = _a.src, badges = _a.badges;
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].container },
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].content }, badges &&
            badges.map(function (badge, index) { return react_1["default"].createElement(Badge_1.Badge, { key: index, text: badge.text }); })),
        src && (react_1["default"].createElement(image_1["default"], { src: src, alt: alt, fill: true, objectFit: "cover", style: { zIndex: -1 } }))));
};
exports["default"] = CoverImage;
