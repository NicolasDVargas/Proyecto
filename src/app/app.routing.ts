import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Component1Component } from "./Components/component1/component1.component";
import { Component3Component } from "./Components/component3/component3.component";
import { InicioComponent } from "./Components/inicio/inicio.component";
import { InicioGuard } from "./inicio.guard";

const routes = [
    {
        path: '',component:  InicioComponent
    },
    {path:'imagen',component:Component3Component, canActivate: [InicioGuard]},
    {path:'**', component: Component1Component}
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    })
export class AppRoutingModule {}   