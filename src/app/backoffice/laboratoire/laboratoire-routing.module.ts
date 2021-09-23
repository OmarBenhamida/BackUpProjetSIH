import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { LaboratoireComponent } from './laboratoire.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { EchantillonComponent } from './echantillon/echantillon.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: LaboratoireComponent,
    children: [
      { path: '', redirectTo: 'labo', pathMatch: 'full' },
      { path: 'analyse', component: AnalyseComponent },
      { path: 'dm', component: DossiermedicalComponent },
      { path: 'echantillon', component: EchantillonComponent },
      { path: 'labo', component: LaboratoireComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoireRoutingModule {}
