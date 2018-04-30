import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {NotificationComponent} from './layout/notification/notification.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {NewAdminComponent} from './new-admin/new-admin.component';
import {ArchitectureOverviewComponent} from './layout/architecture-overview/architecture-overview.component';
import {ConstructorProfileComponent} from './manage-constructor/constructor-profile/constructor-profile.component';
import {ArchitectureProfileComponent} from './layout/architecture-profile/architecture-profile.component';
import {ConstructorOverviewComponent} from './manage-constructor/constructor-overview/constructor-overview.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'forget-password', component: ForgetPasswordComponent},
    {path: 'new-admin', component: NewAdminComponent},
    {
        path: 'layout', component: LayoutComponent,canActivate: [AuthGuard],
        children: [
            {path: '', component: DashboardComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'notification', component: NotificationComponent},
            {path: 'architectures', component: ArchitectureOverviewComponent},
            {path: 'constructors', component: ConstructorOverviewComponent},
            {path: 'constructor-profile', component: ConstructorProfileComponent},
            {path: 'architecture-profile', component: ArchitectureProfileComponent}
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
