import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida)
    }
}