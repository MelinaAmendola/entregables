export class Rueda {
    private marca : string;
    private rodado : number;

    public constructor (rodadoParametro : number) {
        this.rodado = rodadoParametro;
    }

    getMarca(): string {
        return this.marca; 
    }
    
    getRodado(): number {
        return this.rodado;
    }

    setMarca(nuevaMarca: string): void {
        this.marca = nuevaMarca; 
    }

    setRodado (nuevoRodado: number): void {
        this.rodado = nuevoRodado;
    }
}   
