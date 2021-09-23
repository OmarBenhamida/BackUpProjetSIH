import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecretaireComponent } from './secretaire.component';
import { AdmissionComponent } from './admission/admission.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { OperationComponent } from './operation/operation.component';
import { PatientComponent } from './patient/patient.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';




const routes: Routes = [
 // { path: '', redirectTo: 'secretaire', pathMatch: 'full' },
  {
    path: '',
    component: SecretaireComponent,
    children: [
      { path: '', redirectTo: 'patient', pathMatch: 'full' },
      { path: 'admission', component: AdmissionComponent },
      { path: 'consultation', component: ConsultationComponent },
      { path: 'operation', component: OperationComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'rendezvous', component: RendezvousComponent },
      { path: 'secretaire', component: SecretaireComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretaireRoutingModule {}
