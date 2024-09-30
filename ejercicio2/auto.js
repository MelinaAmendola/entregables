"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año, motor, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = año;
        this.motor = motor;
        this.patente = patente;
    }
    /*metodos*/
    /*SETS*/
    Auto.prototype.setMarca = function (marca) {
        this.marca = "Toyota";
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = "Etios";
    };
    Auto.prototype.setAnio = function (anio) {
        this.anio = 2018;
    };
    Auto.prototype.setMotor = function (motor) {
        this.motor = "nafta";
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = "ABC123";
    };
    /*GETS*/
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.patente;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.getMotor = function () {
        return this.motor;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
exports.Auto = Auto;
var auto1 = new Auto("Volkswagen", "Gol", 2016, "Nafta", "AAA000");
var auto2 = new Auto("Fiat", "Palio", 2006, "Gasoil", "BBB111");
var auto3 = new Auto("Renault", "Sandero", 2010, "Gasoil", "CCC222");
var auto4 = new Auto("Nissan", "Versa", 2022, "Nafta", "DDD333");
console.log(Auto);
