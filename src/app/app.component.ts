import { Component } from '@angular/core';
import { Dulce,Tipo } from './models/candys.model';
import { Admin, IPersona } from './models/persona.model';
import { Pila } from './models/generico.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';

  constructor()
  {
    //let variableCorrecta: string ="Hola";
    //alert(variableCorrecta);

    
    var ducle = new Dulce("Ferrero",Tipo.Choclate);
    console.log(ducle.hacerRuido())

    var ducle2 = new Dulce("Pocky",Tipo.Importados);
    console.log(ducle2.hacerRuido())

    if(ducle.tipo == Tipo.Choclate){
      console.log("Camilo se la come");
    }else{
      console.log("Tambien se la come pero obligado");
    }

    var empleado: IPersona = new Admin();
    empleado.saludar;

    var pilaString = new Pila<String>();
    pilaString.push("zapato");
    pilaString.push("chancla");

    pilaString.toString();
  }
}
