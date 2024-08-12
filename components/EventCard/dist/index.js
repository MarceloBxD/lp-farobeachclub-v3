"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CoverImage_1 = require("./components/CoverImage");
var __1 = require("..");
var Texts_1 = require("../Texts");
var styles_module_scss_1 = require("./styles.module.scss");
var dateFuncs_1 = require("@/utils/dateFuncs");
var AppContext_1 = require("@/context/AppContext");
var EventCard = function (_a) {
    var _b = _a.date, date = _b === void 0 ? new Date() : _b, title = _a.title, description = _a.description, banner = _a.banner, link = _a.link, tag = _a.tag;
    var setModalActive = AppContext_1.useApp().setModalActive;
    if (banner[0] === "/" && banner[1] === "/")
        banner = "https:" + banner;
    var openModal = function () {
        setModalActive({
            title: title,
            description: description,
            banner: banner,
            link: link,
            tag: tag,
            date: date,
            type: "Programação"
        });
    };
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].card, onClick: openModal },
        react_1["default"].createElement(CoverImage_1["default"], { alt: "Imagem do evento", src: banner, badges: [{ text: tag }] }),
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].card_bottom },
            react_1["default"].createElement("div", { className: styles_module_scss_1["default"].card_bottom_text },
                react_1["default"].createElement(Texts_1.Subtitle, { style: { fontWeight: 700 } }, title),
                date && react_1["default"].createElement(Texts_1.Text, null, dateFuncs_1.weekday(date))),
            react_1["default"].createElement(__1.Button, { link: link, style: {
                    width: "100%"
                } },
                "comprar ",
                react_1["default"].createElement("b", null, "ingressos")))));
};
exports["default"] = EventCard;
