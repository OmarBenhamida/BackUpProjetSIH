import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { LoginComponent } from './login/login.component';
import { FrontofficeComponent } from './frontoffice.component';

const routes: Routes = [
 // { path: '', redirectTo: 'frontoffice', pathMatch: 'full' },
  //{ path: 'frontoffice', loadChildren: () => import('./frontoffice.module').then(m => m.FrontofficeModule), },

  //{ path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: FrontofficeComponent,
    children: [
     
     // { path: '', redirectTo: 'login', pathMatch: 'full' },
     // { path: 'login', component: LoginComponent },

      
    ],
  },
  {path: 'dossiermedical' , component: DossiermedicalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontofficeRoutingModule {}
