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
exports.MidiaCard = void 0;
var react_1 = require("react");
var Badge_1 = require("../Badge");
var image_1 = require("next/legacy/image");
var react_spring_1 = require("react-spring");
var __1 = require("..");
var styles_module_scss_1 = require("./styles.module.scss");
var PinIcon_1 = require("@/assets/icons/PinIcon");
var tokens_1 = require("@/data/tokens");
exports.MidiaCard = function (_a) {
    var date = _a.date, banner = _a.banner, tag = _a.tag, title = _a.title, link = _a.link, description = _a.description, fixed = _a.fixed, category = _a.category;
    var dateFormatted = new Date(date).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "numeric"
    });
    // check if link is youtube
    var isVideo = link.includes("youtube") || link.includes("youtu.be") || link.includes("vimeo");
    var infoSpring = react_spring_1.useSpring({
        from: {
            maxHeight: 0,
            opacity: 0
        },
        to: {
            maxHeight: 0,
            opacity: 0
        },
        config: {
            duration: 200
        }
    });
    var enterSpring = function () {
        infoSpring.maxHeight.start(200);
        infoSpring.opacity.start(1);
    };
    var leaveSpring = function () {
        infoSpring.maxHeight.start(0);
        infoSpring.opacity.start(0);
    };
    return (react_1["default"].createElement("div", { id: "card", className: styles_module_scss_1["default"].card, onMouseEnter: enterSpring, onMouseLeave: leaveSpring, onClick: function () {
            enterSpring();
        } },
        react_1["default"].createElement(image_1["default"], { alt: title, src: banner, layout: "fill", sizes: "100vw", className: styles_module_scss_1["default"].img }),
        fixed && (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].cardContent, style: {
                color: tokens_1.Tokens.colors.neutral.gray_light
            } },
            react_1["default"].createElement(PinIcon_1["default"], null))),
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].content },
            tag && react_1["default"].createElement(Badge_1.Badge, { text: tag }),
            react_1["default"].createElement(react_spring_1.animated.div, { style: __assign({ display: "flex", flexDirection: "column", gap: 12 }, infoSpring) },
                react_1["default"].createElement("div", { style: {
                        color: tokens_1.Tokens.colors.neutral.white,
                        marginTop: 12
                    } },
                    title,
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", null,
                        dateFormatted,
                        " . ",
                        description)),
                react_1["default"].createElement(__1.Button, { id: "btn-midia-card", variant: "white-black", style: {
                        width: "100%"
                    }, link: link }, category === "ASSESSORIA DE IMPRENSA" ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Ver ",
                    react_1["default"].createElement("b", null, "mat\u00E9ria"))) : isVideo ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Ver ",
                    react_1["default"].createElement("b", null, "v\u00EDdeo"))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Ver ",
                    react_1["default"].createElement("b", null, "fotos"))))))));
};
