import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './Components/component1/component1.component';
import { Component3Component } from './Components/component3/component3.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './Components/header/header.component';
import { PadreComponent } from './Components/padre/padre.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { BodyComponent } from './Components/body/body.component';
import { HijoComponent } from './Components/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component3Component,
    HeaderComponent,
    BodyComponent,
    PadreComponent,
    HijoComponent,
    FormularioComponent,
    InicioComponent  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
