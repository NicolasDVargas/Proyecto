import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/models/persona.model';
import { ClienteService } from 'src/app/servicios/Cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  public Cliente: cliente = new cliente();
  constructor(public _clienteService: ClienteService ) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this._clienteService.agregar(this.Cliente);
    this.Cliente = new cliente()
  }

}
