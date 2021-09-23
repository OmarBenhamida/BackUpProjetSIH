import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

    BackofficeComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
