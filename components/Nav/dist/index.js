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
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("@/data/navigation");
var Button_1 = require("../Button");
var react_spring_1 = require("react-spring");
var navigation_2 = require("next/navigation");
var styles_module_scss_1 = require("./styles.module.scss");
var AppContext_1 = require("@/context/AppContext");
var Texts_1 = require("../Texts");
var NavItem_1 = require("./NavItem");
var Hamburguer_1 = require("./Hamburguer");
var Nav = function () {
    var _a;
    var _b = react_1.useState(false), menuActive = _b[0], setMenuActive = _b[1];
    var _c = AppContext_1.useApp(), setBookingActive = _c.setBookingActive, bookingActive = _c.bookingActive, isMobile = _c.device.isMobile;
    var pathname = navigation_2.usePathname();
    var pathnameTitle = (_a = navigation_1.navigation.find(function (item) { return item.href === pathname; })) === null || _a === void 0 ? void 0 : _a.title;
    if (pathnameTitle === "Faça seu evento") {
        pathnameTitle = "Evento";
    }
    // Menu opened in mobile
    var menuStyles = react_spring_1.useSpring({
        from: {
            opacity: 0,
            y: -24,
            maxHeight: 0
        },
        to: {
            opacity: menuActive && !bookingActive ? 1 : 0,
            y: menuActive && !bookingActive ? 0 : -24,
            maxHeight: menuActive && !bookingActive ? 1000 : 0
        }
    });
    // Nav closed when booking is active
    var navStyles = react_spring_1.useSpring({
        from: {
            opacity: 1,
            y: 0,
            maxHeight: 1000
        },
        to: {
            opacity: bookingActive ? 0 : 1,
            y: bookingActive ? -24 : 0,
            maxHeight: bookingActive ? 0 : 1000
        }
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("nav", { id: "navbar", className: styles_module_scss_1["default"].nav_container },
            react_1["default"].createElement(react_spring_1.animated.div, { className: styles_module_scss_1["default"].nav_menu, style: __assign({}, navStyles) },
                react_1["default"].createElement("div", { className: "mobile " + styles_module_scss_1["default"].btns },
                    react_1["default"].createElement(Hamburguer_1["default"], { onClick: function () { return setMenuActive(!menuActive); } }),
                    react_1["default"].createElement(Texts_1.Caption, { wrap: false, color: "white" }, pathnameTitle)),
                navigation_1.navigation.map(function (item, index) { return (react_1["default"].createElement(NavItem_1["default"], { className: "desktop", item: item, index: index, key: index, hoverFunc: !!item.subMenu })); }),
                react_1["default"].createElement(Button_1["default"], { variant: 'brand-black', wrap: isMobile, onClick: function () { return setBookingActive(true); } },
                    "fa\u00E7a seu ",
                    react_1["default"].createElement("b", null, "or\u00E7amento"))),
            react_1["default"].createElement(react_spring_1.animated.div, { className: "mobile " + styles_module_scss_1["default"].nav_menu_mobile, style: __assign({}, menuStyles) }, navigation_1.navigation.map(function (item, index) { return (react_1["default"].createElement(NavItem_1["default"], { key: index, item: item, index: index, hoverFunc: false })); })))));
};
exports["default"] = Nav;
