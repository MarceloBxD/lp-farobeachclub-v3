"use strict";
exports.__esModule = true;
exports.useContentMargin = void 0;
exports.useContentMargin = function (_a) {
    var ref = _a.ref;
    if (!ref.current)
        return 0;
    var margin = window.getComputedStyle(ref.current).margin;
    return Number(margin.replace("px", ""));
};
