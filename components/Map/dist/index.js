"use client";
"use strict";
exports.__esModule = true;
exports.MapEl = void 0;
var react_1 = require("react");
var styles_module_scss_1 = require("./styles.module.scss");
var api_1 = require("@react-google-maps/api");
exports.MapEl = function () {
    var center = {
        lat: -22.990901947021484,
        lng: -43.23163604736328
    };
    var _a = api_1.useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || ""
    }), isLoaded = _a.isLoaded, loadError = _a.loadError;
    if (loadError)
        return react_1["default"].createElement("div", null, "Erro ao carregar o mapa");
    if (!isLoaded)
        return react_1["default"].createElement("div", null, "Carregando...");
    return (react_1["default"].createElement("div", { className: styles_module_scss_1["default"].container },
        react_1["default"].createElement(api_1.GoogleMap, { mapContainerStyle: {
                width: "100%",
                height: "100%"
            }, center: center, zoom: 12, options: {
                disableDefaultUI: true,
                zoomControl: true,
                mapTypeControl: true,
                maxZoom: 18,
                minZoom: 10,
                clickableIcons: false,
                mapTypeId: "roadmap"
            } },
            react_1["default"].createElement(api_1.Marker, { position: center, title: "Faro Beach Club", animation: window.google.maps.Animation.DROP }))));
};
