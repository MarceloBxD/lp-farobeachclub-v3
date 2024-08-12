"use strict";
var _a, _b;
exports.__esModule = true;
exports.markdownOptions = void 0;
var rich_text_types_1 = require("@contentful/rich-text-types");
var image_1 = require("next/legacy/image");
var fonts_1 = require("@/app/fonts");
exports.markdownOptions = {
    renderMark: (_a = {},
        _a[rich_text_types_1.MARKS.BOLD] = function (text) { return React.createElement("strong", { className: fonts_1.montserrat.className }, text); },
        _a[rich_text_types_1.MARKS.ITALIC] = function (text) { return React.createElement("em", { className: fonts_1.montserrat.className }, text); },
        _a[rich_text_types_1.MARKS.UNDERLINE] = function (text) { return React.createElement("u", { className: fonts_1.montserrat.className }, text); },
        _a[rich_text_types_1.MARKS.CODE] = function (text) { return React.createElement("code", { className: fonts_1.montserrat.className }, text); },
        _a),
    renderNode: (_b = {},
        _b[rich_text_types_1.BLOCKS.PARAGRAPH] = function (node, children) { return (React.createElement("p", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.HEADING_1] = function (node, children) { return (React.createElement("h1", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.HEADING_2] = function (node, children) { return (React.createElement("h2", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.HEADING_3] = function (node, children) { return (React.createElement("h3", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.HEADING_4] = function (node, children) { return (React.createElement("h4", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.HEADING_5] = function (node, children) { return (React.createElement("h5", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.HEADING_6] = function (node, children) { return (React.createElement("h6", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.UL_LIST] = function (node, children) { return React.createElement("ul", { className: fonts_1.montserrat.className }, children); },
        _b[rich_text_types_1.BLOCKS.OL_LIST] = function (node, children) { return React.createElement("ol", { className: fonts_1.montserrat.className }, children); },
        _b[rich_text_types_1.BLOCKS.LIST_ITEM] = function (node, children) { return (React.createElement("li", { className: fonts_1.montserrat.className }, children)); },
        _b[rich_text_types_1.BLOCKS.QUOTE] = function (node, children) { return React.createElement("q", { className: fonts_1.montserrat.className }, children); },
        _b[rich_text_types_1.BLOCKS.HR] = function (node, children) { return React.createElement("hr", null); },
        _b[rich_text_types_1.BLOCKS.EMBEDDED_ASSET] = function (node, children) { return (React.createElement(image_1["default"], { src: node.data.target.fields.file.url, alt: 'image' })); },
        _b[rich_text_types_1.BLOCKS.EMBEDDED_ENTRY] = function (node, children) { return React.createElement("div", { className: fonts_1.montserrat.className }, children); },
        _b)
};
