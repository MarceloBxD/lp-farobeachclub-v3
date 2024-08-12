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
var Map_1 = require("@/components/Map");
var styles_module_scss_1 = require("./styles.module.scss");
var components_1 = require("@/components");
var WppContact_1 = require("@/components/WppContact");
var Texts_1 = require("@/components/Texts");
var Contato = function (props) {
    return (react_1["default"].createElement(components_1.Wrapper, { anchor: "contato", contentClass: {
            content: styles_module_scss_1["default"].wrapper
        }, contentStyle: __assign({}, props.style) },
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].contact },
            react_1["default"].createElement("p", { style: { color: "#555", letterSpacing: "3px" } }, "Contato"),
            react_1["default"].createElement(Texts_1.Title, null,
                "Fale ",
                react_1["default"].createElement("b", null, "Conosco")),
            react_1["default"].createElement(Texts_1.Description, null,
                "Faro Beach Club + Rooftop \uD83C\uDF34 Endere\u00E7o: Av. Niemeyer, 101 ",
                react_1["default"].createElement("br", null),
                "Rio de Janeiro - RJ Mais informa\u00E7\u00F5es: (21) 99713-0244."),
            react_1["default"].createElement(WppContact_1.WppButton, { iconColor: "white", style: {
                    width: "250px",
                    display: "flex",
                    justifyContent: "center"
                } }),
            react_1["default"].createElement(Map_1.MapEl, null))));
};
exports["default"] = Contato;
