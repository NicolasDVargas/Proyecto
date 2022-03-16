import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class Servicio1Service {

    public nombreServicio:  string = "wilmer";
    public arreglo: string[]= [];

    constructor(){}

    public SaludarPorNombre(nombre: string):any{
        return "Hola: " + nombre;
    }

    public AgregarNombre(nombre: string){
        this.arreglo.push(nombre);
    }
}