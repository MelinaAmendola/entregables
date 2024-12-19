"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rueda = void 0;
var Rueda = /** @class */ (function () {
    function Rueda(rodadoParametro) {
        this.rodado = rodadoParametro;
    }
    Rueda.prototype.getMarca = function () {
        return this.marca;
    };
    Rueda.prototype.getRodado = function () {
        return this.rodado;
    };
    Rueda.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Rueda.prototype.setRodado = function (nuevoRodado) {
        this.rodado = nuevoRodado;
    };
    return Rueda;
}());
exports.Rueda = Rueda;
