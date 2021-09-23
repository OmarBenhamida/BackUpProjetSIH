import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaiementComponent } from './paiement/paiement.component';
import { ComptabiliteComponent } from './comptabilite.component';
import { ComptabiliteRoutingModule } from './comptabilite-routing.module';



@NgModule({
  declarations: [
    PaiementComponent,
    ComptabiliteComponent
  ],
  imports: [
    CommonModule,
    ComptabiliteRoutingModule,

  ]
})
export class ComptabiliteModule { }
