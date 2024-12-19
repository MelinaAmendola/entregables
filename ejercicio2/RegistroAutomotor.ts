import { Auto } from "./Auto";

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

    modificarAuto (parametroAuto: Auto, marca: string, modelo: string, anio: number, motor: string) {

    }

    buscarAuto (patente: string) {
        return this.listadoAutos.find(auto => auto.getPatente() === patente);  
    }
}

