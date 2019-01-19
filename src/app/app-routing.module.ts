import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { AuthAccess } from './app.auth.module'
//import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { MicroInteractionsComponent } from './micro-interactions/micro-interactions.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MicroInteractionsDisableBtnDuringApiCallComponent } from  './micro-interactions-disable-btn-during-api-call/micro-interactions-disable-btn-during-api-call.component';
import { MicroInteractionsSelectionListComponent } from './micro-interactions-selection-list/micro-interactions-selection-list.component';

import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'status', component: StatusComponent, data: { animation: 'login' } },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'micro-interactions',
    component: MicroInteractionsComponent,
    data: {
      animation: 'login'
    },
    children: [
      {
        path: '',
        component: MicroInteractionsSelectionListComponent,
        data: {
          leftNav: 'menu'
        }
      }, {
        path: 'disable-btn-during-api-call',
        component: MicroInteractionsDisableBtnDuringApiCallComponent,
        data: { 
          leftNav: 'back'
        }
      }
    ]
  },
  { path: 'nav-menu', component: NavMenuComponent, data: { animation: 'status' }, },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
