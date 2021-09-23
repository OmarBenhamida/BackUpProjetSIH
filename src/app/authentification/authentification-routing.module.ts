import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { SigninComponent } from './signin/signin.component';
import { AuthentificationComponent } from './authentification.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: AuthentificationComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },

      { path: 'signin', component: SigninComponent },
      { path: 'authentification', component: AuthentificationComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {}
