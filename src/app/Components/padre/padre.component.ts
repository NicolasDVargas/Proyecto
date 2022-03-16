import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  @ViewChild(HijoComponent) hijo: HijoComponent;
  public nombre: string="karol";
  
  constructor() { 
 
  }

  ngOnInit(): void {
  }

  recibirInfo(valor:string){
    alert("Dato enviado desde el componente hijo " + valor)
  }

  saludarHijoDesdePadre(){
    this.hijo.saludarDesdePadre(this.nombre);
  }

}
