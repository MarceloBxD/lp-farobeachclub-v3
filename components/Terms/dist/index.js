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
var cookies_next_1 = require("cookies-next");
var react_spring_1 = require("react-spring");
var styles_module_scss_1 = require("./styles.module.scss");
var Texts_1 = require("../Texts");
var __1 = require("..");
var AppContext_1 = require("@/context/AppContext");
var link_1 = require("next/link");
var Terms = function () {
    var bookingActive = AppContext_1.useApp().bookingActive;
    var _a = react_1.useState(false), showConsent = _a[0], setShowConsent = _a[1];
    var checkCookie = function () {
        var cookie = cookies_next_1.getCookie("termsConsent");
        setShowConsent(!cookie);
    };
    var cookieStatus = function (bool) {
        cookies_next_1.setCookie("termsConsent", bool, {});
        setShowConsent(false);
    };
    var _b = react_1.useState(1), scrollOpacity = _b[0], setScrollOpacity = _b[1];
    var animateTerms = react_spring_1.useSpring({
        from: {
            opacity: 0,
            zIndex: -1
        },
        to: {
            opacity: showConsent && !bookingActive ? scrollOpacity : 0,
            zIndex: showConsent && !bookingActive ? 9999999 : -1
        }
    });
    react_1.useEffect(function () {
        if (bookingActive)
            setShowConsent(false);
        else if (!cookies_next_1.getCookie("termsConsent"))
            setShowConsent(true);
    }, [bookingActive, setShowConsent]);
    react_1.useEffect(function () {
        var handleScroll = function () {
            var isScrolled = window.scrollY > 0;
            var newOpacity = isScrolled ? 1 : 0.3;
            setScrollOpacity(newOpacity);
        };
        checkCookie();
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [checkCookie]);
    return (react_1["default"].createElement(react_spring_1.animated.div, { className: styles_module_scss_1["default"].container, onMouseEnter: function () { return setScrollOpacity(1); }, onMouseLeave: function () { return window.scrollY > 0 || setScrollOpacity(0.3); }, onClick: function () { return setScrollOpacity(1); }, style: __assign({}, animateTerms) },
        react_1["default"].createElement(Texts_1.Caption, { color: "white", wrap: true },
            "eu confirmo que li e aceito os",
            " ",
            react_1["default"].createElement(link_1["default"], { href: "/termos" }, "termos de uso e pol\u00EDtica de privacidade")),
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].buttons_box }, [
            {
                id: 0,
                title: "Aceitar",
                onClick: function () { return cookieStatus(true); }
            },
            {
                id: 1,
                title: "Recusar",
                onClick: function () { return cookieStatus(false); }
            },
        ].map(function (item) { return (react_1["default"].createElement(__1.Button, { key: item.id, onClick: item.onClick, variant: "terms-button" }, item.title)); }))));
};
exports["default"] = Terms;
