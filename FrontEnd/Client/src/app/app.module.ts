import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './landing/landing.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {FormWizardModule} from 'angular-wizard-form/dist';
import { ConstructorProfileComponent } from './layout/constructor/constructor-profile/constructor-profile.component';
import {StarRatingModule} from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingComponent,
    ConstructorProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StarRatingModule.forRoot(),
    AppRoutingModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
