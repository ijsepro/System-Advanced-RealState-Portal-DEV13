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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LayoutComponent,
        SidebarComponent,
        NotificationComponent,
        DashboardComponent,
        ForgetPasswordComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
