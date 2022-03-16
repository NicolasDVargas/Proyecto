import { Injectable } from '@angular/core';
import {cliente} from '../models/persona.model'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public listaPersonas: cliente[] = [];
  constructor() { }

  public agregar(Usuario : cliente){
    this.listaPersonas.push(Usuario)
    alert("Empleado agregado coreectamente");
  }

  public obtener(){
    return this.listaPersonas;
  }
}
