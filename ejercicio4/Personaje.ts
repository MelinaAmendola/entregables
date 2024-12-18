export class Personaje {
    protected nombre: string;
    protected nivel: number = 1;
    protected puntosDeVida: number;

    public constructor(nombre: string, nivel: number, puntosDeVida: number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    atacar(): void {
        console.log(`¡${this.nombre} lanza un ataque!`);
    }

    defender(): void {
        console.log(`${this.nombre} se defiende`);
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getPuntosDeVida(): number {
        return this.puntosDeVida;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public setPuntosDeVida(puntosDeVida: number): void {
        this.puntosDeVida = puntosDeVida;
    }

}