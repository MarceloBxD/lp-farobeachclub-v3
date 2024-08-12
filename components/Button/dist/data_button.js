"use strict";
exports.__esModule = true;
exports.button_theme = void 0;
var tokens_1 = require("@/data/tokens");
exports.button_theme = {
    "brand": {
        bgColor: tokens_1.Tokens.colors.brand.beachclub_rooftop,
        borderColor: tokens_1.Tokens.colors.brand.beachclub_rooftop,
        color: "#fff",
        hover: {
            bgColor: "transparent",
            color: tokens_1.Tokens.colors.brand.beachclub_rooftop,
            borderColor: tokens_1.Tokens.colors.brand.beachclub_rooftop
        }
    },
    "brand-black": {
        bgColor: tokens_1.Tokens.colors.brand.beachclub_rooftop,
        borderColor: tokens_1.Tokens.colors.brand.beachclub_rooftop,
        color: "#000",
        hover: {
            bgColor: 'transparent',
            color: "#fff",
            borderColor: "#fff"
        }
    },
    "black-white": {
        bgColor: "#fff",
        borderColor: "transparent",
        color: "#000",
        hover: {
            bgColor: "transparent",
            color: "#000",
            borderColor: "#000"
        }
    },
    "white-black": {
        bgColor: "transparent",
        borderColor: "#fff",
        color: "#fff",
        hover: {
            bgColor: "#fff",
            color: "#000",
            borderColor: "#fff"
        }
    },
    "terms-button": {
        bgColor: "rgba(0, 0, 0, 0.05)",
        borderColor: "transparent",
        color: "#fff",
        hover: {
            bgColor: "transparent",
            color: "#fff",
            borderColor: "#000"
        }
    }
};
