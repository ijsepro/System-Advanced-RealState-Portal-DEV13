import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {HomeModule} from './home/home.module';
import {LayoutComponent} from './layout/layout.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {NotificationComponent} from './layout/notification/notification.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {ForgetPasswordService} from "./services/forget-password.service";
import {HttpModule} from "@angular/http";
import { NewAdminRegistrationComponent } from './new-admin-registration/new-admin-registration.component';
import {AdminService} from './services/admin.service';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ArchitectureOverviewComponent} from './layout/architecture-overview/architecture-overview.component';
import {ResetPasswordService} from './services/reset-password.service';
import { ConstructorProfileComponent } from './manage-constructor/constructor-profile/constructor-profile.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LayoutComponent,
        SidebarComponent,
        NotificationComponent,
        DashboardComponent,
        ForgetPasswordComponent,
        NewAdminRegistrationComponent,
        NewAdminComponent,
        ResetPasswordComponent,
        ArchitectureOverviewComponent,
        ConstructorProfileComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [
        ForgetPasswordService,
        AdminService,
        ResetPasswordService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
