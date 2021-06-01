import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './screens/user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './screens/user-list/user-list.component';
import { UserService } from 'src/app/service/user/user.service';
import { InputResetDirective } from './utility/input-reset-directive.directive';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserListComponent,
    InputResetDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]

})
export class UserModule { 

}
