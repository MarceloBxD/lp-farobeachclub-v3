"use strict";
exports.__esModule = true;
exports.mediaFooterData = exports.footerData = void 0;
var FacebookIcon_1 = require("@/assets/icons/FacebookIcon");
var InstagramIcon_1 = require("@/assets/icons/InstagramIcon");
var LinkedinIcon_1 = require("@/assets/icons/LinkedinIcon");
var TiktokIcon_1 = require("@/assets/icons/TiktokIcon");
var YoutubeIcon_1 = require("@/assets/icons/YoutubeIcon");
var LinktreeIcon_1 = require("@/assets/icons/LinktreeIcon");
exports.footerData = [
    {
        name: "Termos de uso",
        link: "/termos"
    },
    {
        name: "Política de Privacidade",
        link: "/privacy"
    },
    {
        name: "Política de Cookies",
        link: "#cookie-policy"
    },
];
exports.mediaFooterData = [
    {
        id: 1,
        name: "Facebook",
        link: "https://www.facebook.com/faro-beach-club",
        icon: FacebookIcon_1.FacebookIcon,
        bgColor: "#3b5998"
    },
    {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/farobeachclub",
        icon: InstagramIcon_1.InstagramIcon,
        bgColor: "#e4405f"
    },
    {
        id: 3,
        name: "Linkedin",
        link: "https://www.linkedin.com/in/rodrigo-menescal-ahmed-988150150/?originalSubdomain=br",
        icon: LinkedinIcon_1.LinkedinIcon,
        bgColor: "#0077b5"
    },
    {
        id: 4,
        name: "Yotube",
        link: "https://www.youtube.com/@farobeachclub",
        icon: YoutubeIcon_1["default"],
        bgColor: "#ff0000"
    },
    {
        id: 5,
        name: "Tiktok",
        link: "https://www.tiktok.com/@farobeachclub",
        icon: TiktokIcon_1.TiktokIcon,
        bgColor: "#000"
    },
    {
        id: 6,
        name: "Linketree",
        link: "https://linktr.ee/farobeachclub.rj",
        icon: LinktreeIcon_1["default"],
        bgColor: "#39e09b"
    },
];
