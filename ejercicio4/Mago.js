"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
// import { Atacar } from "./interfaces";
// import { Defender } from "./interfaces";
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, puntosDeVida) {
        return _super.call(this, nombre, nivel, puntosDeVida) || this;
    }
    Mago.prototype.atacar = function () {
        console.log("\u00A1".concat(this.nombre, " lanza un hechizo con su b\u00E1culo m\u00E1gico!"));
    };
    Mago.prototype.defender = function () {
        console.log("\u00A1".concat(this.nombre, " se defiende de sus enemigos creando una burbuja m\u00E1gica!"));
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
