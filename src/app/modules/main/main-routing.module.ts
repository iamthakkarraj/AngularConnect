import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './screens/aboutus/aboutus.component';
import { LoginComponent } from './screens/login/login.component';
import { RegistrationComponent } from './screens/registration/registration.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'Register',
    pathMatch: 'full'
  },
  { 
    path: 'Register',    
    component: RegistrationComponent    
  },
  { 
    path: 'Login',    
    component: LoginComponent
  },
  { 
    path: 'Aboutus',    
    component: AboutusComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { 


}
