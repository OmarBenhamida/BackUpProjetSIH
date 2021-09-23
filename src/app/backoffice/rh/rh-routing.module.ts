import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { RhComponent } from './rh.component';
import { CongeComponent } from './conge/conge.component';
import { PostComponent } from './post/post.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { FichepaieComponent } from './fichepaie/fichepaie.component';
import { DisiplineComponent } from './disipline/disipline.component';
import { DemandeComponent } from './demande/demande.component';
import { ContratComponent } from './contrat/contrat.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: RhComponent,
    children: [
      { path: '', redirectTo: 'Rh', pathMatch: 'full' },
      { path: 'conge', component: CongeComponent },
      { path: 'contrat', component: ContratComponent },
      { path: 'demande', component: DemandeComponent },
      { path: 'disipline', component: DisiplineComponent },
      { path: 'fichepaie', component: FichepaieComponent },
      { path: 'personnel', component: PersonnelComponent },
      { path: 'post', component: PostComponent },


      { path: 'Rh', component: RhComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhRoutingModule {}
