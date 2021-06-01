import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './screens/user-details/user-details.component';
import { UserListComponent } from './screens/user-list/user-list.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  { 
    path: 'List',    
    component: UserListComponent    
  },
  { 
    path: 'User',
    component: UserDetailsComponent
  },
  { 
    path: 'User/:id',
    component: UserDetailsComponent
  }, 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 


}

// The hero's birthday is <u class="px-2"> {{ date | date:dateFormate }} </u>