import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {NotificationComponent} from './layout/notification/notification.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {ArchitectureOverviewComponent} from './layout/architecture-overview/architecture-overview.component';
import {ConstructorProfileComponent} from './layout/constructor-profile/constructor-profile.component';
import {ArchitectureProfileComponent} from './layout/architecture-profile/architecture-profile.component';
import {ConstructorOverviewComponent} from './layout/constructor-overview/constructor-overview.component';
import {AuthGuard} from './services/auth.guard';
import {NewAdminRegistrationComponent} from './new-admin-registration/new-admin-registration.component';
import {BankersOverviewComponent} from './layout/bankers-overview/bankers-overview.component';
import {LandProviderOverviewComponent} from './layout/land-provider-overview/land-provider-overview.component';
import {FlatProviderOverviewComponent} from './layout/flat-provider-overview/flat-provider-overview.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'forget-password', component: ForgetPasswordComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {
        path: 'layout', component: LayoutComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: DashboardComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'notification', component: NotificationComponent},
            {path: 'appnew', component: NewAdminRegistrationComponent},
            {
                path: 'architectures', component: ArchitectureOverviewComponent,
                children: [
                    {path: 'architecture-profile', component: ArchitectureProfileComponent}
                ]
            },
            {
                path: 'constructors', component: ConstructorOverviewComponent,
                children: [
                    {path: 'constructor-profile', component: ConstructorProfileComponent}
                ]
            },
            {
                path: 'bankers', component: BankersOverviewComponent,
                // children: [
                //     {path: 'constructor-profile', component: UserProfileComponent}
                // ]
            },
            {
                path: 'land-providers', component: LandProviderOverviewComponent,
                // children: [
                //     {path: 'constructor-profile', component: UserProfileComponent}
                // ]
            },
            {
                path: 'flat-providers', component: FlatProviderOverviewComponent,
                // children: [
                //     {path: 'constructor-profile', component: UserProfileComponent}
                // ]
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
