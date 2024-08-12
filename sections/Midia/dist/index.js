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
var MidiaCard_1 = require("@/components/MidiaCard");
var react_1 = require("react");
var Swiper_1 = require("@/components/Swiper");
var Badge_1 = require("@/components/Badge");
var styles_module_scss_1 = require("./styles.module.scss");
var components_1 = require("@/components");
var AppContext_1 = require("@/context/AppContext");
var Texts_1 = require("@/components/Texts");
var Midia = function (_a) {
    var category = _a.category, _b = _a.hasSwiper, hasSwiper = _b === void 0 ? true : _b, header = _a.header, props = __rest(_a, ["category", "hasSwiper", "header"]);
    var content = AppContext_1.useApp().content;
    if (content === null)
        return null;
    var midias = content.midias;
    // filter midias by category
    var midiasFiltered = midias.filter(function (item) {
        if (category)
            return item.category === category;
        else
            return true;
    });
    if (!midiasFiltered.length)
        return null;
    var cards = midiasFiltered.map(function (item, idx) { return (react_1["default"].createElement(MidiaCard_1.MidiaCard, { key: idx, date: item.date, banner: item.banner, tag: item.tag, title: item.title, link: item.link, description: item.description, fixed: item.fixed, type: item.type, category: item.category })); });
    return (react_1["default"].createElement("div", __assign({ className: styles_module_scss_1["default"].container }, props),
        react_1["default"].createElement(components_1.Wrapper, { style: {
                paddingTop: 0,
                paddingBottom: 0
            }, contentStyle: {
                display: "flex",
                flexDirection: "column",
                gap: 16
            } },
            react_1["default"].createElement(Texts_1.Title, null, header === null || header === void 0 ? void 0 : header.title),
            react_1["default"].createElement(Texts_1.Description, null, header === null || header === void 0 ? void 0 : header.description),
            category ? (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].badgeText },
                react_1["default"].createElement(Badge_1.Badge, { text: category, color: "#000", borderColor: "#000" }))) : (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].badgeText }, [
                "EVENTOS SOCIAIS",
                "SHOWS & FESTAS",
                "ASSESSORIA DE IMPRENSA",
            ].map(function (item, idx) { return (react_1["default"].createElement(Badge_1.Badge, { text: item, key: idx, color: "#000", borderColor: "#000" })); })))),
        hasSwiper ? (react_1["default"].createElement(Swiper_1["default"], { hasPadding: true, childrenArray: cards })) : (react_1["default"].createElement(components_1.Wrapper, { style: {
                paddingTop: 0,
                paddingBottom: 0
            } },
            react_1["default"].createElement("div", { className: styles_module_scss_1["default"].cardList }, cards)))));
};
exports["default"] = Midia;
