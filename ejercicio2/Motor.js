"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor(tipoParametro) {
        this.tipo = tipoParametro;
    }
    Motor.prototype.getMarca = function () {
        return this.marca;
    };
    Motor.prototype.getTipo = function () {
        return this.tipo;
    };
    Motor.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Motor.prototype.setTipo = function (nuevoTipo) {
        this.tipo = nuevoTipo;
    };
    return Motor;
}());
exports.Motor = Motor;
