//dependencies
//============
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

//components
//==========
import { WelcomeScreenComponent } from './screens/welcome-screen/welcome-screen.component';
import { DefaultComponent } from './components/default/default.component';
import { NgmodelComponent } from './components/examples/ngmodel/ngmodel.component';
import { TodosComponent } from './components/examples/todos/todos.component';
import { PipesComponent } from './components/examples/pipes/pipes.component';

//screens
//=======
import { ExampleScreenComponent } from './screens/example-screen/example-screen.component';

//pipes
//=====
import { CeaserPipe } from './utility/CaesarPipe';

//service
//=======
import { TodosService } from '../../service/shared/examples/todos.service';
import { AddTodoComponent } from './components/examples/add-todo/add-todo.component';

@NgModule({
  declarations: [  
    ExampleScreenComponent,
    DefaultComponent,
    WelcomeScreenComponent,
    NgmodelComponent,
    TodosComponent,
    PipesComponent,
    CeaserPipe,
    AddTodoComponent
  ],
  imports: [  
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,    
    HttpClientModule,
    CommonModule
  ],
  exports: [
    DefaultComponent,
    CeaserPipe
  ],
  providers: [
    TodosService
  ]
})
export class SharedModule {

  static forRoot() {
    return {
        ngModule: SharedModule,
        providers: [],
    };
  }
 }
