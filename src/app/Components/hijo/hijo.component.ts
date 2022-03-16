import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input('value') value:string = "";
  @Output() valorEnvio :EventEmitter <string>= new EventEmitter<string>();
  public nombreHijo :string = "";

  constructor() { }

  ngOnInit(): void {
  }

  emiter(){
    this.valorEnvio.emit(this.nombreHijo);
  }

  public saludarDesdePadre(nombre:string){
    alert("nombre enviado desde el padre: " + nombre);
  }
}
