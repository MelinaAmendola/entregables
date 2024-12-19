"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var Auto_1 = require("./Auto");
var Motor_1 = require("./Motor");
var Rueda_1 = require("./Rueda");
//crear motor
var motor1 = new Motor_1.Motor("Nafta");
var motor2 = new Motor_1.Motor("Gas");
var motor3 = new Motor_1.Motor("Diesel");
//crear ruedas
var rueda1 = new Rueda_1.Rueda(205);
var rueda2 = new Rueda_1.Rueda(195);
var rueda3 = new Rueda_1.Rueda(215);
var rueda4 = new Rueda_1.Rueda(225);
//crear autos: marca, modelo, anio, patente, motor, ruedas.
var auto1 = new Auto_1.Auto("Volkswagen", "Gol", 2016, "AAA000", motor1, rueda1);
var auto2 = new Auto_1.Auto("Fiat", "Palio", 2006, "BBB111", motor2, rueda2);
var auto3 = new Auto_1.Auto("Renault", "Sandero", 2010, "CCC222", motor3, rueda3);
var auto4 = new Auto_1.Auto("Nissan", "Versa", 2022, "DDD333", motor1, rueda4);
//crear registro
var registroautomotor = new RegistroAutomotor_1.RegistroAutomotor("Pueyrredon 1230", 444333);
registroautomotor.agregarAuto(auto1);
registroautomotor.agregarAuto(auto2);
registroautomotor.agregarAuto(auto3);
registroautomotor.agregarAuto(auto4);
// esto se puede repetir con los 4 instancias de auto
console.log("Se ha registrado el auto marca ".concat(auto1.getMarca(), " , modelo ").concat(auto1.getModelo(), " , patente ").concat(auto1.getPatente(), " de manera exitosa."));
//obtener listado de autos
console.log("Listado de autos registrados: ", registroautomotor.getAutos().map(function (auto) { return auto.getModelo(); }));
//eliminar un auto
registroautomotor.eliminarAuto("DDD333");
console.log("Listado de autos después de eliminar según patente: ", registroautomotor.getAutos().map(function (auto) { return auto.getModelo(); }));
registroautomotor.modificarAuto("CCC222", "Fiat", "Chronos", 2015, motor3, rueda2);
