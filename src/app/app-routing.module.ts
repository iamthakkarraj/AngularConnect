import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleScreenComponent } from './shared/components/example-screen/example-screen.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/Welcome',
    pathMatch: 'full'
  },
  { 
    path: 'Welcome',
    component: WelcomeComponent
  },
  { 
    path: 'Examples',
    component: ExampleScreenComponent
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
export class AppRoutingModule { 


}
