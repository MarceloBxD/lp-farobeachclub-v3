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
var TitleText_1 = require("../../components/TitleText");
var styles_module_scss_1 = require("./styles.module.scss");
var image_1 = require("next/legacy/image");
var Swiper_1 = require("@/components/Swiper");
var TitleTextSwiper = function (_a) {
    var button = _a.button, swiperdata = _a.swiperdata, inverse = _a.inverse, _b = _a.texts, title = _b.title, description = _b.description, anchor = _a.anchor, props = __rest(_a, ["button", "swiperdata", "inverse", "texts", "anchor"]);
    return (react_1["default"].createElement("div", __assign({}, props, { id: anchor, className: styles_module_scss_1["default"].wrapper, style: __assign({ flexDirection: inverse ? "row-reverse" : "row" }, props.style) }),
        react_1["default"].createElement(TitleText_1["default"], { inverse: inverse, button: button, texts: {
                title: title,
                description: description
            } }),
        react_1["default"].createElement(Swiper_1["default"], { spaceBetween: 0, slidesPerView: 1, childrenArray: (swiperdata === null || swiperdata === void 0 ? void 0 : swiperdata.map(function (data, index) { return (react_1["default"].createElement("div", { key: index, className: styles_module_scss_1["default"].imgSwiper },
                react_1["default"].createElement(image_1["default"], { src: data.src, alt: data.alt, layout: "fill", objectFit: "cover" }))); })) || [] })));
};
exports["default"] = TitleTextSwiper;
