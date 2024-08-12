"use strict";
exports.__esModule = true;
exports.fullDate = exports.weekday = void 0;
exports.weekday = function (date) {
    return new Date(date)
        .toLocaleDateString("pt-BR", {
        weekday: "long",
        timeZone: "UTC"
    })
        .replace(/^\w/, function (c) { return c.toUpperCase(); });
};
exports.fullDate = function (date) {
    return new Date(date)
        .toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    })
        .replace(/^\w/, function (c) { return c.toUpperCase(); });
};
