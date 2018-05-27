import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ConstructorProfileComponent} from './layout/constructor/constructor-profile/constructor-profile.component';
import {MainComponent} from './landing/main/main.component';
import {LoginComponent} from './login/login.component';
import {UserRolesComponent} from './user-roles/user-roles.component';

const routes: Routes = [
    {path: '', component: LandingComponent,children:
        [
          {path: '', component: MainComponent},
          {path: 'profile', component: ConstructorProfileComponent},
          {path: 'user-roles', component: UserRolesComponent}
        ]
    },
    {path:'login', component:LoginComponent}

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
