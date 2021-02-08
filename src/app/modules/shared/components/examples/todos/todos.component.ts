import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../../../service/shared/examples/todos.service';
import { Todo } from '../../../objects/class/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos: Todo[] = [];


  constructor(private tagService: TodosService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.tagService.GetAll().subscribe( result => {
      this.todos = result.slice(0,5);    
      console.log(this.todos);      
    });    
  }

  addTodoItem(e){
    this.todos.push(e as Todo);
  }

}
