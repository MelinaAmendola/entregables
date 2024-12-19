export class Motor {
    private marca: string;
    private tipo: string;

    public constructor(tipoParametro: string) {
        this.tipo = tipoParametro;
    }

    getMarca(): string {
        return this.marca;
    }

    getTipo(): string {
        return this.tipo;
    }

    setMarca(nuevaMarca: string): void {
        this.marca = nuevaMarca;
    }

    setTipo(nuevoTipo: string): void {
        this.tipo = nuevoTipo;
    }
}