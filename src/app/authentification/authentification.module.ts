import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthentificationComponent } from './authentification.component';
import { AuthentificationRoutingModule } from './authentification-routing.module';



@NgModule({
  declarations: [
    SigninComponent,
    AuthentificationComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
