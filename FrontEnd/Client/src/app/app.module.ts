import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {LandingComponent} from './landing/landing.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {FormWizardModule} from 'angular-wizard-form/dist';
import {ConstructorProfileComponent} from './layout/constructor/constructor-profile/constructor-profile.component';
import {StarRatingModule} from 'angular-star-rating';
import {UserRegistrationService} from './services/user-registration.service';
import {HttpModule} from '@angular/http';
import {MainComponent} from './landing/main/main.component';
import {ClientConstuctorService} from './services/client-constuctor.service';
import {AppErrorHandler} from './common/app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingComponent,
    ConstructorProfileComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StarRatingModule.forRoot(),
    AppRoutingModule,
    FormWizardModule,
    HttpModule

  ],
  providers: [
    UserRegistrationService,
    ClientConstuctorService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
