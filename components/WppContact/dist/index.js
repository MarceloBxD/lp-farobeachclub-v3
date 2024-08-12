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
exports.WppButton = void 0;
var react_1 = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
var __1 = require("..");
var WhatsappIcon_1 = require("@/assets/icons/WhatsappIcon");
exports.WppButton = function (_a) {
    var iconColor = _a.iconColor, props = __rest(_a, ["iconColor"]);
    var phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    return (react_1["default"].createElement("a", __assign({}, props, { className: styles_module_scss_1["default"].link, target: "_blank", href: "https://wa.me/" + phone, style: __assign({ minWidth: "100%" }, props.style) }),
        react_1["default"].createElement(__1.Button, { icon: react_1["default"].createElement(WhatsappIcon_1["default"], { fill: "#00A000" }), variant: "black-white", className: styles_module_scss_1["default"].wpp },
            react_1["default"].createElement("div", null,
                "Nos contate pelo ",
                react_1["default"].createElement("b", null, "whatsapp")))));
};
