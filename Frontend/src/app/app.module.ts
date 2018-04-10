import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {LoginComponent} from './login/login.component';
import {NewAdminRegistrationComponent} from "./new-admin-registration/new-admin-registration.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {AdminService} from "./service/admin.service";


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        LoginComponent,
        NewAdminRegistrationComponent,
        ForgetPasswordComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [AdminService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
