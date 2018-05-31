import {LandingComponent} from './landing/landing.component';
import {ConstructorProfileComponent} from './layout/constructor/constructor-profile/constructor-profile.component';
import {MainComponent} from './landing/main/main.component';
import {LoginComponent} from './login/login.component';
import {UserRolesComponent} from './user-roles/user-roles.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [
    {path: '', component: LandingComponent},

      // children:
      //   [
      //     {path: '', component: MainComponent},
      //     {path: 'profile', component: ConstructorProfileComponent},
      //     {path: 'user-roles', component: UserRolesComponent}
      //   ]

    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ConstructorProfileComponent},
    {path: 'user-roles', component: UserRolesComponent},
    {path: 'dashboard', component: ClientProfileComponent, canActivate: [AuthGuard] }

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
