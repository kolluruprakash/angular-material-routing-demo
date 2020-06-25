import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [ 
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'reg', component: RegisterComponent},
  {path:'**', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}