import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida)
    }

    atacar(): void {
        console.log(`¡${this.nombre} lanza una flecha precisa!`);
    }

    defender(): void {
        console.log(`¡${this.nombre} se defiende de sus enemigos con su escudo!`);
    }

}