"use strict";
exports.__esModule = true;
exports.treatEventsImages = exports.treatContent = exports.treatCustomers = exports.treatHomeBanner = void 0;
var markdownOptions_1 = require("@/utils/markdownOptions");
var rich_text_react_renderer_1 = require("@contentful/rich-text-react-renderer");
exports.treatHomeBanner = function (c) {
    var treatedHomeBanner = c.map(function (homeBanner) {
        var _a = homeBanner.fields, title = _a.title, image = _a.image;
        return {
            alt: title,
            src: "https://" + image.fields.file.url.slice(2)
        };
    });
    treatedHomeBanner.sort(function (a, b) {
        return a.alt.localeCompare(b.alt);
    });
    return { images: treatedHomeBanner };
};
exports.treatCustomers = function (c) {
    var treatedCustomers = c.map(function (customer) {
        var _a = customer.fields, title = _a.title, logo = _a.logo;
        return {
            title: title,
            banner: "https://" + logo.fields.file.url.slice(2)
        };
    });
    return treatedCustomers;
};
exports.treatContent = function (c) {
    var treatedEvents = c.map(function (event) {
        var _a = event.fields, title = _a.title, date = _a.date, _b = _a.description, description = _b === void 0 ? "" : _b, banner = _a.banner, link = _a.link, _c = _a.fixed, fixed = _c === void 0 ? false : _c, _d = _a.tag, tag = _d === void 0 ? "" : _d, _e = _a.type, type = _e === void 0 ? "" : _e, _f = _a.category, category = _f === void 0 ? "" : _f;
        return {
            title: title,
            tag: tag,
            date: new Date(date),
            description: rich_text_react_renderer_1.documentToReactComponents(description, markdownOptions_1.markdownOptions),
            banner: "https://" + banner.fields.file.url.slice(2),
            link: link,
            fixed: fixed,
            type: type,
            category: category
        };
    });
    var orderedByDate = treatedEvents.sort(function (a, b) {
        return a.date.getTime() - b.date.getTime();
    });
    var orderedByFixed = orderedByDate.sort(function (a, b) {
        return a.fixed ? -1 : 1;
    });
    return orderedByFixed;
};
exports.treatEventsImages = function (c) {
    var treatedEventsImages = c.map(function (item) {
        return {
            alt: item.fields.image.fields.title,
            src: "https://" + item.fields.image.fields.file.url.slice(2)
        };
    });
    return treatedEventsImages;
};
