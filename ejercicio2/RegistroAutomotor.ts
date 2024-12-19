import { Auto } from "./Auto";
import { Rueda } from "./Rueda";
import { Motor } from "./Motor";

export class RegistroAutomotor {
    private direccion: string;
    private telefono: number;
    listadoAutos : Auto [];
    //listadoMotos : Moto[] ; para el caso escalable de que se agreguen más clases
    //listadoCamionetas : Camioneta[]; 

    public constructor (direccionParametro: string, telefonoParametro: number) {
        this.direccion = direccionParametro;
        this.telefono = telefonoParametro;
        //this.listadoAutos = listadoParametro;
        this.listadoAutos = [];
        }
    

    getAutos() : Auto [] {
        return this.listadoAutos;
    }

    agregarAuto (parametroAuto: Auto) : void {
        this.listadoAutos.push(parametroAuto);
    }

    eliminarAuto (patente: string) : void {
        this.listadoAutos = this.listadoAutos.filter(auto => auto.getPatente() !== patente);
    }

    modificarAuto (patente: string, nuevaMarca: string, nuevoModelo: string, nuevoAnio: number, nuevoMotor: Motor , nuevoRodado: Rueda) : void {
        const autoAModificar = this.listadoAutos.find(auto => auto.getPatente() === patente);
        autoAModificar.setMarca(nuevaMarca);
        autoAModificar.setModelo(nuevoModelo);
        autoAModificar.setAnio(nuevoAnio);
        autoAModificar.setMotor(nuevoMotor);
        autoAModificar.setRueda(nuevoRodado);
        console.log (`Se modificaron las características del auto cuya patente es: ${patente}` )
    }

    buscarAuto (patente: string) {
        return this.listadoAutos.find(auto => auto.getPatente() === patente);  
    }
}

