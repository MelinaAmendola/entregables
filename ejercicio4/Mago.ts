import { Personaje } from "./Personaje";
// import { Atacar } from "./interfaces";
// import { Defender } from "./interfaces";

export class Mago extends Personaje implements Atacar, Defender {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida);
    }

 atacar(): void {
    console.log(`¡${this.nombre} lanza un hechizo con su báculo mágico!`);
 }
    defender(): void {
        console.log(`¡${this.nombre} se defiende de sus enemigos creando una burbuja mágica!`);
    }
}