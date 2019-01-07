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
  { path: '', component: StatusComponent },
  { path: 'login', component: LoginComponent, data: {animation: 'status'} },
  { path: 'status', component: StatusComponent, data: {animation: 'dashboard'} },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'micro-interactions',
    component: MicroInteractionsComponent,
    data: {animation: 'nav-menu'},
    children: [
      { path: '', component: MicroInteractionsSelectionListComponent },
      { path: 'disable-btn-during-api-call', component: MicroInteractionsDisableBtnDuringApiCallComponent }
    ]
  },
  { path: 'nav-menu', component: NavMenuComponent, data: {animation: ''}, }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
