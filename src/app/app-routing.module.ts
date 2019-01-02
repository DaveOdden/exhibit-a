import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

import { AuthAccess } from './app.auth.module'

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthAccess] },
  { path: 'status', component: StatusComponent, canActivate: [AuthAccess] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthAccess] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
