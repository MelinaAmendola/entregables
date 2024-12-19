"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    //listadoMotos : Moto[] ; para el caso escalable de que se agreguen más clases
    //listadoCamionetas : Camioneta[]; 
    function RegistroAutomotor(direccionParametro, telefonoParametro) {
        this.direccion = direccionParametro;
        this.telefono = telefonoParametro;
        //this.listadoAutos = listadoParametro;
        this.listadoAutos = [];
    }
    RegistroAutomotor.prototype.getAutos = function () {
        return this.listadoAutos;
    };
    RegistroAutomotor.prototype.agregarAuto = function (parametroAuto) {
        this.listadoAutos.push(parametroAuto);
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patente) {
        this.listadoAutos = this.listadoAutos.filter(function (auto) { return auto.getPatente() !== patente; });
    };
    RegistroAutomotor.prototype.modificarAuto = function (patente, nuevaMarca, nuevoModelo, nuevoAnio, nuevoMotor, nuevoRodado) {
        var autoAModificar = this.listadoAutos.find(function (auto) { return auto.getPatente() === patente; });
        autoAModificar.setMarca(nuevaMarca);
        autoAModificar.setModelo(nuevoModelo);
        autoAModificar.setAnio(nuevoAnio);
        autoAModificar.setMotor(nuevoMotor);
        autoAModificar.setRueda(nuevoRodado);
        console.log("Se modificaron las caracter\u00EDsticas del auto cuya patente es: ".concat(patente));
    };
    RegistroAutomotor.prototype.buscarAuto = function (patente) {
        return this.listadoAutos.find(function (auto) { return auto.getPatente() === patente; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
