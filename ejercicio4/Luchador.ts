import { Personaje } from "./Personaje";

export class Luchador extends Personaje implements Atacar, Defender {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida)
    }

    atacar(): void {
        console.log(`¡${this.nombre} lanza un puñetazo destructor!`);
    }

    defender(): void {
        console.log(`¡${this.nombre} se defiende bloqueando el ataque de sus enemigos con sus brazos!`);
    }

}