import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FichederenseignementComponent } from './fichederenseignement/fichederenseignement.component';
import { DemandeComponent } from './demande/demande.component';
import { PersonnelComponent } from './personnel.component';
import { ManagecongeComponent } from './manageconge/manageconge.component';
import { ManageattestationComponent } from './manageattestation/manageattestation.component';
import { ManagefichepaieComponent } from './managefichepaie/managefichepaie.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: PersonnelComponent,
    children: [
      { path: '', redirectTo: 'demande', pathMatch: 'full' },
      { path: 'demande', component: DemandeComponent },
      { path: 'manageconge', component: ManagecongeComponent },
      { path: 'manageattestation', component: ManageattestationComponent },
      { path: 'managefichepaie', component: ManagefichepaieComponent },

      { path: 'fiche', component: FichederenseignementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelRoutingModule {}
