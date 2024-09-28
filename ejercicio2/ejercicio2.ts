/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja, incorporando los conceptos nuevos:
• Encapsulamiento y composicion.
Mandar el link al repositorio de GitHub*/

/*main*/
import { Vehiculo } from "./Vehiculo"; 

class RegistroAutomotor {
    /*atributos*/
    public listadoVehiculos : Vehiculo[];
    
    /*constructor*/
    public constructor (listadoParametro: Vehiculo[]) {
        this.listadoVehiculos = listadoParametro;
    }

    /*métodos: buscar, agregar, editar y eliminar */
    agregarVehiculo(parametroVehiculo: Vehiculo): void {
        this.listadoVehiculos.push(parametroVehiculo);
    }

    buscarVehiculo (): void {
        
    }
    
}