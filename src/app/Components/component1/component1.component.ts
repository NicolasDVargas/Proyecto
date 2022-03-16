import { Component, Injector, Input, OnInit } from '@angular/core';
import { Servicio1Service } from '../../servicios/servicio1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public nombre: string = "Marcela";
  public arreglo: string[] = [];
  public mostrarUI: boolean = false;

  constructor(public _servicio1Service: Servicio1Service) {


    var saludo = this._servicio1Service.SaludarPorNombre(this.nombre);
    this.nombre= saludo;

    this._servicio1Service.AgregarNombre("Juan");
    this._servicio1Service.AgregarNombre("Pedro");
    this._servicio1Service.AgregarNombre("Carlos");

    this.arreglo = this._servicio1Service.arreglo;
    this.mostrarUI = true;
  }

  ngOnInit(): void {

  }

  public agregarElemento(nombre: string){
    this._servicio1Service.AgregarNombre(nombre);
  }

}


