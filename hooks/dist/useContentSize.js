"use strict";
exports.__esModule = true;
exports.useContentSize = void 0;
exports.useContentSize = function (_a) {
    var ref = _a.ref;
    if (!ref.current)
        return;
    return {
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
    };
};
