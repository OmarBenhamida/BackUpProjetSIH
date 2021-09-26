import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { RhComponent } from './rh.component';
import { CongeComponent } from './conge/conge.component';
import { PostComponent } from './poste/post.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { FichepaieComponent } from './fichepaie/fichepaie.component';
import { DisiplineComponent } from './disipline/disipline.component';
import { DemandeComponent } from './demande/demande.component';
import { ContratComponent } from './contrat/contrat.component';
import { AddpersonnelComponent } from './addpersonnel/addpersonnel.component';
import { ManageafectationpostComponent } from './manageafectationpost/manageafectationpost.component';
import { ManagedemandecongeComponent } from './managedemandeconge/managedemandeconge.component';
import { ManageattestationComponent } from './manageattestation/manageattestation.component';
import { ManagefichepaieComponent } from '../personnel/managefichepaie/managefichepaie.component';
import { AcueilComponent } from './acueil/acueil.component';
import { AbsenceComponent } from './absence/absence.component';

const routes: Routes = [
  {
    path: '',
    component: RhComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'conge', component: CongeComponent },
      { path: 'absence', component: AbsenceComponent },

      { path: 'contrat', component: ContratComponent },
      { path: 'demande', component: DemandeComponent },
      { path: 'disipline', component: DisiplineComponent },
      { path: 'fichepaie', component: FichepaieComponent },
      { path: 'personnel', component: PersonnelComponent },
      { path: 'post', component: PostComponent },
      { path: 'addpersonnel', component: AddpersonnelComponent },
      { path: 'affectation', component: ManageafectationpostComponent },
      { path: 'managedemandeconge', component: ManagedemandecongeComponent },
      { path: 'manageattestation', component: ManageattestationComponent },
      { path: 'managefichepaie', component: ManagefichepaieComponent },
      { path: 'accueil', component: AcueilComponent },



    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhRoutingModule {}
