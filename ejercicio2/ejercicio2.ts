/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja, incorporando los conceptos nuevos:
• Encapsulamiento y composicion.
Mandar el link al repositorio de GitHub*/

/*main*/
import { Auto } from "./Auto"; 

class RegistroAutomotor {
    /*atributos*/
    public listadoDeAutos : Auto[];
    public patente: string; 
    
    /*constructor*/ 
    public constructor (listadoParametro: Auto[]) {
        this.listadoDeAutos = listadoParametro;
    }

    /*métodos: buscar, agregar, editar y eliminar */
     agregarAuto(parametroAuto: Auto): void {
        this.listadoDeAutos.push(parametroAuto);
    }

    eliminarAuto (patente: string): void {
        this.listadoDeAutos = this.listadoDeAutos.filter(auto => auto.getPatente() !== patente); 
    }

    modificarAuto (parametroAuto: Auto, marca: string, modelo: string, anio: number, motor: string) {
    }

    buscarAuto(): void {  
    }

}