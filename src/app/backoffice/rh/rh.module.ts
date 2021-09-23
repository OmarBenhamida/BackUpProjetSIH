import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongeComponent } from './conge/conge.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { ContratComponent } from './contrat/contrat.component';
import { DisiplineComponent } from './disipline/disipline.component';
import { DemandeComponent } from './demande/demande.component';
import { PostComponent } from './post/post.component';
import { FichepaieComponent } from './fichepaie/fichepaie.component';
import { RhComponent } from './rh.component';
import { RhRoutingModule } from './rh-routing.module';



@NgModule({
  declarations: [
    CongeComponent,
    PersonnelComponent,
    ContratComponent,
    DisiplineComponent,
    DemandeComponent,
    PostComponent,
    FichepaieComponent,
    RhComponent
  ],
  imports: [
    CommonModule,
    RhRoutingModule
  ]
})
export class RhModule { }
