import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { AdmissionComponent } from './admission/admission.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { OperationComponent } from './operation/operation.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { SecretaireComponent } from './secretaire.component';
import { SecretaireRoutingModule } from './secretaire-routing.module';



@NgModule({
  declarations: [
    PatientComponent,
    AdmissionComponent,
    ConsultationComponent,
    OperationComponent,
    RendezvousComponent,
    SecretaireComponent
  ],
  imports: [
    CommonModule,
    SecretaireRoutingModule,
  ]
})
export class SecretaireModule { }
