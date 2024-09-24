export class Motos {
    private marca: string;
    private modelo: string;
    private año: number;
    private motor: string;
    private patente: string; 

    constructor (marca: string, modelo: string, año: number, motor: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.motor = motor;
        this.patente = patente;
    }

    getPatente():string {
        return this.patente;
    }
}