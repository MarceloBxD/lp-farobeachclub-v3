"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var axios_1 = require("axios");
var CloseIcon_1 = require("@/assets/icons/CloseIcon");
var react_1 = require("react");
var react_spring_1 = require("react-spring");
var Input_1 = require("../Input");
var WppContact_1 = require("../WppContact");
var styles_module_scss_1 = require("./styles.module.scss");
var Texts_1 = require("../Texts");
var booking_1 = require("@/data/booking");
var Button_1 = require("../Button");
var react_toastify_1 = require("react-toastify");
var bookingschema_1 = require("../../data/yup/bookingschema");
var date_fns_1 = require("date-fns");
var fonts_1 = require("@/app/fonts");
var AppContext_1 = require("@/context/AppContext");
var BookingForm = function (_a) {
    var setActive = _a.setActive, active = _a.active, props = __rest(_a, ["setActive", "active"]);
    var formRef = react_1.useRef(null);
    var _b = react_1["default"].useState(false), sending = _b[0], setSending = _b[1];
    var _c = react_1["default"].useState(false), buttonHovered = _c[0], setButtonHovered = _c[1];
    var setBtnLoading = AppContext_1.useApp().setBtnLoading;
    react_1.useEffect(function () {
        var handleDocumentClick = function (e) {
            if (active &&
                formRef.current &&
                !formRef.current.contains(e.target)) {
                setActive(false);
            }
        };
        if (active) {
            document.addEventListener("click", handleDocumentClick);
        }
        else {
            document.removeEventListener("click", handleDocumentClick);
        }
        return function () {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [active, setActive]);
    var _d = react_1["default"].useState({
        firstname: "",
        email: "",
        phone: "",
        tipo: "",
        date: "",
        informacoes_adicionais__opcional_: ""
    }), form = _d[0], setForm = _d[1];
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formattedDate_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setBtnLoading(true);
                    setSending(true);
                    if (!form.firstname ||
                        !form.email ||
                        !form.phone ||
                        !form.tipo ||
                        !form.date) {
                        setSending(false);
                        setBtnLoading(false);
                        react_toastify_1.toast.warn("Preencha todos os campos obrigatórios!");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    formattedDate_1 = date_fns_1.format(new Date(form.date), "yyyy-MM-dd");
                    return [4 /*yield*/, bookingschema_1.bookingSchema
                            .validate(form)
                            .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, axios_1["default"]
                                            .post("https://api.hsforms.com/submissions/v3/integration/submit/" + process.env.PORTAL_ID + "/" + process.env.FORM_ID_BOOKINGFORM, {
                                            fields: Object.entries(__assign(__assign({}, form), { date: formattedDate_1 })).map(function (_a) {
                                                var name = _a[0], value = _a[1];
                                                return ({
                                                    name: name,
                                                    value: value
                                                });
                                            })
                                        })
                                            .then(function () {
                                            setSending(true);
                                            react_toastify_1.toast.success("Obrigado pelas informações, em breve um de nossos especialistas entrará em contato.");
                                            setForm({
                                                firstname: "",
                                                email: "",
                                                phone: "",
                                                tipo: "",
                                                date: "",
                                                informacoes_adicionais__opcional_: ""
                                            });
                                            setBtnLoading(false);
                                            setActive(false);
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function (err) {
                            react_toastify_1.toast.warn(err.message);
                            setSending(false);
                            setBtnLoading(false);
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    react_toastify_1.toast.error("Não foi possível enviar o formulário.");
                    setSending(false);
                    setBtnLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var formSpring = react_spring_1.useSpring({
        from: {
            opacity: 0,
            transform: "translateX(100%)"
        },
        to: {
            opacity: active ? 1 : 0,
            transform: "translateX(" + (active ? "0%" : "100%") + ")"
        }
    });
    return (react_1["default"].createElement(react_spring_1.animated.div, __assign({}, props, { ref: formRef, className: styles_module_scss_1["default"].container, style: __assign(__assign({}, formSpring), props.style) }),
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].header },
            react_1["default"].createElement(Texts_1.Subtitle, null, "Or\u00E7amento via email"),
            react_1["default"].createElement(CloseIcon_1["default"], { onClick: function () { return setActive(false); }, style: {
                    width: 42,
                    height: 42,
                    cursor: "pointer"
                } })),
        react_1["default"].createElement("div", { className: styles_module_scss_1["default"].content },
            react_1["default"].createElement("form", { id: "bookingform", onSubmit: onSubmit, className: styles_module_scss_1["default"].form },
                react_1["default"].createElement("div", { style: { marginTop: "25px" } },
                    react_1["default"].createElement(Input_1["default"], { label: "Nome e Sobrenome*", name: "firstname", type: "text", value: form.firstname, onChange: function (e) {
                            setForm(__assign(__assign({}, form), { firstname: e.target.value }));
                        } }),
                    react_1["default"].createElement(Input_1["default"], { label: "Email*", name: "email", type: "text", onChange: function (e) {
                            setForm(__assign(__assign({}, form), { email: e.target.value }));
                        }, value: form.email }),
                    react_1["default"].createElement(Input_1["default"], { label: "Telefone*", name: "phone", mask: "+99 99 99999 9999", type: "text", onChange: function (e) {
                            setForm(__assign(__assign({}, form), { phone: e.target.value }));
                        }, value: form.phone }),
                    react_1["default"].createElement("select", { onChange: function (e) { return setForm(__assign(__assign({}, form), { tipo: e.target.value })); }, className: styles_module_scss_1["default"].select + " " + fonts_1.montserrat.className, name: "event", defaultValue: "0" },
                        react_1["default"].createElement("option", { disabled: true, value: "0" }, "Marque seu tipo de evento*"),
                        booking_1.options.map(function (item, index) { return (react_1["default"].createElement("option", { value: item.name, key: index }, item.name)); })),
                    react_1["default"].createElement(Input_1["default"]
                    // label='Data do evento*' // TODO: RESOLVER ese label
                    , { 
                        // label='Data do evento*' // TODO: RESOLVER ese label
                        name: "date", type: "date", onChange: function (e) {
                            setForm(__assign(__assign({}, form), { date: e.target.value }));
                        }, value: form.date }),
                    react_1["default"].createElement("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            outline: "none"
                        } },
                        react_1["default"].createElement("label", { className: fonts_1.montserrat.className }, "Informa\u00E7\u00F5es adicionais (opcional)"),
                        react_1["default"].createElement("textarea", { onChange: function (e) {
                                return setForm(__assign(__assign({}, form), { informacoes_adicionais__opcional_: e.target.value }));
                            }, className: styles_module_scss_1["default"].textarea }))),
                react_1["default"].createElement("div", { style: { paddingBottom: "15px" } },
                    react_1["default"].createElement(Button_1["default"], { load: {
                            variant: "bubbles",
                            color: buttonHovered ? "#000" : "#fff",
                            size: "120px"
                        }, onMouseEnter: function () { return setButtonHovered(true); }, onMouseLeave: function () { return setButtonHovered(false); }, disabled: sending, onClick: function () {
                            setBtnLoading(true);
                        }, type: "submit", style: {
                            width: "100%"
                        } },
                        react_1["default"].createElement("p", null, "Enviar")),
                    react_1["default"].createElement(WppContact_1.WppButton, null))))));
};
exports["default"] = BookingForm;
