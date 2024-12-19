"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marcaParametro, modeloParametro, anioParametro, patenteParametro, motorParametro, ruedaParametro) {
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro;
        this.patente = patenteParametro;
        this.motor = motorParametro;
        this.rueda = ruedaParametro;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getMotor = function () {
        return this.motor;
    };
    Auto.prototype.getRueda = function () {
        return this.rueda;
    };
    Auto.prototype.setMarca = function (marcaParametro) {
        this.marca = marcaParametro;
    };
    Auto.prototype.setModelo = function (modeloParametro) {
        this.modelo = modeloParametro;
    };
    Auto.prototype.setAnio = function (anioParametro) {
        this.anio = anioParametro;
    };
    Auto.prototype.setPatente = function (patenteParametro) {
        this.patente = patenteParametro;
    };
    Auto.prototype.setMotor = function (motorParametro) {
        this.motor = motorParametro;
    };
    Auto.prototype.setRueda = function (ruedaParametro) {
        this.rueda = ruedaParametro;
    };
    return Auto;
}());
exports.Auto = Auto;
