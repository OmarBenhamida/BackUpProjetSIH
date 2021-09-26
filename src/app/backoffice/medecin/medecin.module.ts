import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { GardeComponent } from './garde/garde.component';
import { MedecinComponent } from './medecin.component';
import { MedecinRoutingModule } from './medecin-routing.module';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';



@NgModule({
  declarations: [
    AgendaComponent,
    DossiermedicalComponent,
    PrescriptionComponent,
    AutorisationComponent,
    GardeComponent,
    MedecinComponent,
    DetailsPatientComponent
  ],
  imports: [
    CommonModule,
    MedecinRoutingModule
  ]
})
export class MedecinModule { }
