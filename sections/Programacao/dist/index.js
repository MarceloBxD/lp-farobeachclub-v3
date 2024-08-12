"use client";
"use strict";
exports.__esModule = true;
var EventCard_1 = require("@/components/EventCard");
var Swiper_1 = require("@/components/Swiper");
var react_1 = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
var components_1 = require("@/components");
var Texts_1 = require("@/components/Texts");
var AppContext_1 = require("@/context/AppContext");
function Programacao() {
    var _a;
    var content = AppContext_1.useApp().content;
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].wrapper },
        react_1["default"].createElement(components_1.Wrapper, { anchor: "programacao", style: {
                paddingTop: 0,
                paddingBottom: 0
            } },
            react_1["default"].createElement(Texts_1.Title, null, "Programa\u00E7\u00E3o")),
        react_1["default"].createElement(Swiper_1["default"], { hasPadding: true, childrenArray: (_a = content === null || content === void 0 ? void 0 : content.events) === null || _a === void 0 ? void 0 : _a.map(function (event, index) { return (react_1["default"].createElement(EventCard_1["default"], { title: event.title, key: index, date: event.date, description: event.description, link: event.link, banner: event.banner, tag: event.tag, type: event.type })); }) })));
}
exports["default"] = Programacao;
