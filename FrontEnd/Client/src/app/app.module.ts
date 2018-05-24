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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { NavBarComponent } from './client-profile/nav-bar/nav-bar.component';
import { FooterComponent } from './client-profile/footer/footer.component';
import { AddWorkComponent } from './add-work/add-work.component';
import {LoginComponent} from './login/login.component';
import {PostWorkService} from './services/post-work.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingComponent,
    ConstructorProfileComponent,
    MainComponent,
    ClientProfileComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    AddWorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StarRatingModule.forRoot(),
    AppRoutingModule,
    FormWizardModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [
    UserRegistrationService,
    ClientConstuctorService,
    PostWorkService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
