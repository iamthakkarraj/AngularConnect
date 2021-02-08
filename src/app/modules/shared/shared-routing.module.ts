import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ExampleScreenComponent } from './screens/example-screen/example-screen.component';
import { WelcomeScreenComponent } from './screens/welcome-screen/welcome-screen.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [    
    {
        path: '',    
        redirectTo: '/Welcome',
        pathMatch: 'full'  
    }, 
    {         
        path: 'Welcome',
        component: WelcomeScreenComponent  
    },
    {             
        path: 'Examples',    
        component: ExampleScreenComponent  
    }, 
]

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      FormsModule

    ],
  exports: [
      RouterModule,

    ]
})
export class SharedRoutingModule { }
