"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/legacy/image");
var Swiper_1 = require("@/components/Swiper");
var Texts_1 = require("@/components/Texts");
var components_1 = require("@/components");
var AppContext_1 = require("@/context/AppContext");
var Clientes = function () {
    var content = AppContext_1.useApp().content;
    if (content === null || content.customers.length < 1)
        return null;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(components_1.Wrapper, { style: {
                paddingBottom: 0
            }, contentStyle: {
                display: "flex",
                flexDirection: "column",
                gap: 16
            } },
            react_1["default"].createElement(Texts_1.Title, { style: { margin: "0 auto" } }, "Clientes"),
            react_1["default"].createElement("div", { className: "desktop", style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    width: "100%",
                    gap: "20px"
                } }, content.customers.map(function (client, index) { return (react_1["default"].createElement("div", { key: index, style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    filter: "grayscale(100%)",
                    transition: "filter 0.3s ease",
                    cursor: "pointer"
                }, onMouseOver: function (e) {
                    e.currentTarget.style.filter = "grayscale(0%)";
                }, onMouseOut: function (e) {
                    e.currentTarget.style.filter = "grayscale(100%)";
                } },
                react_1["default"].createElement(image_1["default"], { style: {
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        objectFit: "contain"
                    }, alt: client.title, width: 120, height: 120, src: client.banner }))); }))),
        react_1["default"].createElement("div", { className: "mobile", style: {
                marginBottom: "24px"
            } },
            react_1["default"].createElement(Swiper_1["default"], { slidesPerView: 2, style: {
                    width: "100%",
                    overflowY: "visible",
                    height: "100%"
                }, childrenArray: content.customers.map(function (customer, index) {
                    return (react_1["default"].createElement("div", { style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "120px"
                        }, key: index },
                        react_1["default"].createElement(image_1["default"], { style: {
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                objectFit: "contain"
                            }, alt: customer.title, width: 120, height: 120, src: customer.banner })));
                }) }))));
};
exports["default"] = Clientes;
