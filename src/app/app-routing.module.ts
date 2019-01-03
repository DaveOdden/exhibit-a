import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

import { AuthAccess } from './app.auth.module'

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { MicroInteractionsComponent } from './micro-interactions/micro-interactions.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MicroInteractionsDisableBtnDuringApiCallComponent } from './micro-interactions-disable-btn-during-api-call/micro-interactions-disable-btn-during-api-call.component';
import { MicroInteractionsSelectionListComponent } from './micro-interactions-selection-list/micro-interactions-selection-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'status', component: StatusComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'micro-interactions', component: MicroInteractionsComponent, children: [
    { path: '', component: MicroInteractionsSelectionListComponent },
    { path: 'disable-btn-during-api-call', component: MicroInteractionsDisableBtnDuringApiCallComponent }
  ] },
  { path: 'nav-menu', component: NavMenuComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
