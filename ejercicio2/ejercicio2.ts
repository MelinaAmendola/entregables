/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja, incorporando los conceptos nuevos:
• Encapsulamiento y composicion.
Mandar el link al repositorio de GitHub*/

/*main*/
import { Autos } from "./Autos"; 
import { Motos } from "./Motos";
import { Camionetas } from "./Camionetas";

export class RegistroAutomotor {
    /*atributos*/
    private nombreDueño: string;
    private autos : Autos[];
    private motos : Motos[];
    private camionetas : Camionetas[];

    /*constructor*/
    public constructor (nombreDueño: string) {
        this.nombreDueño = nombreDueño;
        this.autos = [];
        this.motos = [];
        this.camionetas = [];
    }

    /*metodos*/ 
    agregarVehiculo (autos: Autos, motos: Motos, camionetas: Camionetas): void {
        this.autos.push(autos);
    }
}