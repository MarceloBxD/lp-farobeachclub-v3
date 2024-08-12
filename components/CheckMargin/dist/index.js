"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppContext_1 = require("@/context/AppContext");
var styles_module_scss_1 = require("./styles.module.scss");
var CheckMargin = function (_a) {
    var children = _a.children;
    var setMargin = AppContext_1.useApp().setMargin;
    var divRef = react_1["default"].useRef(null);
    react_1.useEffect(function () {
        var handleResize = function () {
            if (divRef.current && setMargin) {
                setMargin(divRef.current.getBoundingClientRect().left);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, [divRef, setMargin]);
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].container },
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].content, ref: divRef }, children)));
};
exports["default"] = CheckMargin;
