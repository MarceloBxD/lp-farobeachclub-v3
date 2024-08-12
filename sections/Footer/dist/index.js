"use client";
"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var tokens_1 = require("@/data/tokens");
var components_1 = require("../../components");
var Logo_1 = require("../../components/Logo");
var footer_1 = require("@/data/footer");
var styles_module_scss_1 = require("./styles.module.scss");
var Texts_1 = require("@/components/Texts");
var link_1 = require("next/link");
exports.Footer = function () {
    return (react_1["default"].createElement(components_1.Wrapper, { bgColor: "" + tokens_1.Tokens.colors.brand.beachclub_rooftop, contentClass: {
            content: styles_module_scss_1["default"].wrapper
        }, style: {
            padding: "0 0 20px 0",
            alignItems: "center",
            justifyContent: "center"
        } },
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].socialMediaContainer }, footer_1.mediaFooterData.map(function (item) { return (react_1["default"].createElement(link_1["default"], { target: "_blank", key: item.id, onMouseOver: function (e) {
                e.currentTarget.style.backgroundColor = item.bgColor;
                e.currentTarget.style.color = "#000";
            }, onMouseLeave: function (e) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#fff";
            }, className: styles_module_scss_1["default"].midiaItem, href: item.link },
            react_1["default"].createElement(item.icon, null))); })),
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].bottom },
            react_1["default"].createElement(Logo_1["default"], { style: { height: "168px", width: "178px", flexShrink: 0 } }),
            react_1["default"].createElement("div", { className: styles_module_scss_1["default"].content },
                react_1["default"].createElement(Texts_1.Caption, { color: "white", style: {
                        lineHeight: "180%",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "16px"
                    } },
                    react_1["default"].createElement("b", null, " Faro Beach Club \u00AE 2023"),
                    react_1["default"].createElement("br", null),
                    "Todos os direitos reservados",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("a", { href: "https://www.majorssolutions.com.br", target: "_blank" }, "Site by Majors Solutions"))))));
};
