import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {
    path: '', 
    loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) 
  },
  {
    path: 'App', 
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) 
  },
  { 
    path: 'Admin', 
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
