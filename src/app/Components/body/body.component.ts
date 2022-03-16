import { Component, InjectionToken, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public nombre: string = "";


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarPropiedad(){
    this.nombre="karol"
  }

  irimagenes(){
    this.router.navigateByUrl('/imagen');
  }

}
