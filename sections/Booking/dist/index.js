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
var BookingForm_1 = require("@/components/BookingForm");
var react_1 = require("react");
var react_spring_1 = require("react-spring");
var styles_module_scss_1 = require("./styles.module.scss");
var AppContext_1 = require("@/context/AppContext");
function Booking() {
    var _a = AppContext_1.useApp(), setBookingActive = _a.setBookingActive, bookingActive = _a.bookingActive, isMobile = _a.device.isMobile;
    var animation = react_spring_1.useSpring({
        from: {
            opacity: 0,
            visibility: "hidden"
        },
        to: {
            opacity: bookingActive ? 1 : 0,
            visibility: bookingActive ? "visible" : "hidden"
        }
    });
    if (isMobile)
        return (react_1["default"].createElement(BookingForm_1["default"], { style: __assign({ position: "fixed" }, animation), setActive: setBookingActive, active: bookingActive }));
    return (react_1["default"].createElement(react_spring_1.animated.div, { className: styles_module_scss_1["default"].overlay, style: __assign({}, animation) },
        react_1["default"].createElement(BookingForm_1["default"], { setActive: setBookingActive, active: bookingActive })));
}
exports["default"] = Booking;
