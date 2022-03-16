import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../../servicios/servicio1.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public arreglo: string[] = [];
  public mostrarUI: boolean = true;

  constructor(public _servicio1Service: Servicio1Service) { }

  ngOnInit(): void {
  }
  guardar(){
    localStorage.setItem('usuario', 'juan.torres@gmail.com')
  }
  limpiar(){
    localStorage.clear();
  }

}
