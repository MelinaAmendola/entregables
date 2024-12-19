import { Rueda } from "./Rueda";
import { Motor } from "./Motor";

export class Auto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: string;
    private motor: Motor;
    private rueda : Rueda;

    constructor (marcaParametro: string, modeloParametro: string, anioParametro: number, patenteParametro: string, motorParametro: Motor, ruedaParametro: Rueda) { 
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro;
        this.patente = patenteParametro;
        this.motor = motorParametro;
        this.rueda =  ruedaParametro;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    getPatente(): string {
        return this.patente;
    }

    getMotor(): Motor {
        return this.motor;
    }

    getRueda(): Rueda {
        return this.rueda;
    }

    setMarca (marcaParametro: string) : void {
        this.marca = marcaParametro;
    }
    
    setModelo (modeloParametro: string) : void {
        this.modelo = modeloParametro;
    }

    setAnio (anioParametro: number) : void {
        this.anio = anioParametro;
    }

    setPatente (patenteParametro: string) : void {
        this.patente = patenteParametro;
    }

    setMotor (motorParametro: Motor) : void {
        this.motor = motorParametro;
    }

    setRueda (ruedaParametro: Rueda): void {
        this.rueda = ruedaParametro;
    }
}
