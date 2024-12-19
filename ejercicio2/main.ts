import { RegistroAutomotor } from "./RegistroAutomotor"
import { Auto } from "./Auto"
import { Motor } from "./Motor"
import { Rueda } from "./Rueda"

//crear motor
const motor1 = new Motor("Nafta");
const motor2 = new Motor("Gas");
const motor3 = new Motor("Diesel");

//crear ruedas
const rueda1 = new Rueda(205);
const rueda2 = new Rueda(195);
const rueda3 = new Rueda(215);
const rueda4 = new Rueda(225);

//crear autos: marca, modelo, anio, patente, motor, ruedas.
const auto1 = new Auto("Volkswagen", "Gol", 2016, "AAA000", motor1, rueda1);
const auto2 = new Auto("Fiat", "Palio", 2006, "BBB111", motor2, rueda2);
const auto3 = new Auto("Renault", "Sandero", 2010, "CCC222", motor3, rueda3);
const auto4 = new Auto("Nissan", "Versa", 2022, "DDD333", motor1, rueda4);

//crear registro
const registroautomotor = new RegistroAutomotor("Pueyrredon 1230", 444333);

registroautomotor.agregarAuto(auto1);
registroautomotor.agregarAuto(auto2);
registroautomotor.agregarAuto(auto3);
registroautomotor.agregarAuto(auto4);

// esto se puede repetir con los 4 instancias de auto
console.log(`Se ha registrado el auto marca ${auto1.getMarca()} , modelo ${auto1.getModelo()} , patente ${auto1.getPatente()} de manera exitosa.`)

//obtener listado de autos
console.log("Listado de autos registrados: ", registroautomotor.getAutos().map(auto => auto.getModelo()));

//eliminar un auto
registroautomotor.eliminarAuto("DDD333");
console.log("Listado de autos después de eliminar según patente: ", registroautomotor.getAutos().map(auto => auto.getModelo()));

registroautomotor.modificarAuto("CCC222", "Fiat", "Chronos", 2015, motor3, rueda2); 
