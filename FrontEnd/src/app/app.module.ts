import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    NotificationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
