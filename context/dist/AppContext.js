"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useApp = exports.AppProvider = void 0;
var react_1 = require("react");
var url_gen_1 = require("@cloudinary/url-gen");
var useTreatedData_1 = require("@/services/useTreatedData");
var useContentfulData_1 = require("@/services/useContentfulData");
var AppContext = react_1.createContext({});
function AppProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(0), margin = _c[0], setMargin = _c[1];
    var _d = react_1.useState(false), bookingActive = _d[0], setBookingActive = _d[1];
    var _e = react_1["default"].useState(false), btnLoading = _e[0], setBtnLoading = _e[1];
    var _f = react_1.useState(null), modalActive = _f[0], setModalActive = _f[1];
    var _g = react_1.useState({
        isMobile: false,
        isDesktop: false
    }), device = _g[0], setDevice = _g[1];
    var _h = react_1.useState(null), content = _h[0], setContent = _h[1];
    var cloudinary = react_1.useMemo(function () {
        return new url_gen_1.Cloudinary({
            cloud: {
                cloudName: "dppimfdxy"
            }
        });
    }, []);
    var checkWidth = function () {
        setDevice({
            isMobile: window.innerWidth <= 768,
            isDesktop: window.innerWidth >= 769
        });
    };
    react_1.useEffect(function () {
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return function () { return window.removeEventListener("resize", checkWidth); };
    }, []);
    react_1.useEffect(function () {
        function getData() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, allEvents, allCustomers, allEventsImages, homeBanner1, homeBanner2, homeBanner3, content_1, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setLoading(true);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all([
                                    useContentfulData_1.getEntries({ contentType: "event" }),
                                    useContentfulData_1.getEntries({ contentType: "cliente" }),
                                    useContentfulData_1.getEntries({
                                        contentType: "eventosCarrossel"
                                    }),
                                    useContentfulData_1.getEntries({ contentType: "homeCarrossel1" }),
                                    useContentfulData_1.getEntries({ contentType: "homeCarrossel2" }),
                                    useContentfulData_1.getEntries({ contentType: "homeCarrossel2" }),
                                ])];
                        case 2:
                            _a = _b.sent(), allEvents = _a[0], allCustomers = _a[1], allEventsImages = _a[2], homeBanner1 = _a[3], homeBanner2 = _a[4], homeBanner3 = _a[5];
                            content_1 = {
                                events: useTreatedData_1.treatContent(allEvents).filter(function (event) { return event.type === "Programação"; }),
                                midias: useTreatedData_1.treatContent(allEvents).filter(function (event) { return event.type === "Midia"; }),
                                customers: useTreatedData_1.treatCustomers(allCustomers),
                                eventsImages: useTreatedData_1.treatEventsImages(allEventsImages),
                                homeBanner: [
                                    useTreatedData_1.treatHomeBanner(homeBanner1),
                                    useTreatedData_1.treatHomeBanner(homeBanner2),
                                    useTreatedData_1.treatHomeBanner(homeBanner3),
                                ]
                            };
                            setContent(content_1);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _b.sent();
                            console.log(err_1);
                            return [3 /*break*/, 4];
                        case 4:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        getData();
    }, []);
    var contextValue = react_1.useMemo(function () { return ({
        margin: margin,
        setMargin: setMargin,
        bookingActive: bookingActive,
        setBookingActive: setBookingActive,
        device: device,
        setDevice: setDevice,
        loading: loading,
        setLoading: setLoading,
        content: content,
        cloudinary: cloudinary,
        btnLoading: btnLoading,
        setBtnLoading: setBtnLoading,
        modalActive: modalActive,
        setModalActive: setModalActive
    }); }, [
        margin,
        setMargin,
        bookingActive,
        setBookingActive,
        device,
        loading,
        content,
        cloudinary,
        btnLoading,
        setBtnLoading,
        modalActive,
        setModalActive,
    ]);
    return (react_1["default"].createElement(AppContext.Provider, { value: contextValue }, children));
}
exports.AppProvider = AppProvider;
function useApp() {
    return react_1.useContext(AppContext);
}
exports.useApp = useApp;
