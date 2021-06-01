import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [   
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'App', 
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) 
  },
  {
    path: '**',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }