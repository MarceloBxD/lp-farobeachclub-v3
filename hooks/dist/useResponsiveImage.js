"use strict";
exports.__esModule = true;
function useResponsiveImage(_a) {
    var _b = _a.imageName, imageName = _b === void 0 ? '' : _b, _c = _a.screenWidth, screenWidth = _c === void 0 ? 1920 : _c;
    function getResponsiveImage(screenWidth) {
        var breakpoints = [
            { size: 1, maxWidth: 768 },
            { size: 2, maxWidth: 1024 },
            { size: 3, maxWidth: 1440 },
            { size: 4, maxWidth: 1920 },
        ];
        for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
            var breakpoint = breakpoints_1[_i];
            if (screenWidth <= breakpoint.maxWidth) {
                if (breakpoint.size === 1)
                    return imageName + ".jpg";
                return imageName + "@" + breakpoint.size + "x.jpg";
            }
        }
        return imageName + "@4x.jpg";
    }
    var responsiveImage = getResponsiveImage(screenWidth);
    return responsiveImage;
}
exports["default"] = useResponsiveImage;
