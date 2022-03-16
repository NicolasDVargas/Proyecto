abstract class candy
{
    nombre: string;

    constructor(nombre: string){
        this.nombre=nombre;
    }

    abstract hacerRuido():string;//hacer generar factura con esto y que devulva la info del dulce
}

export class Dulce extends candy{

    tipo: Tipo;

    constructor (nombre: string, tipo:Tipo){
        super(nombre);
        this.tipo= tipo;
    }

    hacerRuido() {
        return "hola "+ this.nombre;
    }

}

export enum Tipo {Bombones, Choclate, Gomitas, Chicles, Mentolados, Importados}