import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchantillonComponent } from './echantillon/echantillon.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { LaboratoireComponent } from './laboratoire.component';
import { LaboratoireRoutingModule } from './laboratoire-routing.module';



@NgModule({
  declarations: [
    EchantillonComponent,
    DossiermedicalComponent,
    AnalyseComponent,
    LaboratoireComponent
  ],
  imports: [
    CommonModule,
    LaboratoireRoutingModule,

  ]
})
export class LaboratoireModule { }
