import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './landing/landing.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {FormWizardModule} from 'angular-wizard-form/dist';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
