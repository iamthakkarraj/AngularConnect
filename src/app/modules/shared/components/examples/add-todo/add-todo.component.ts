import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../../objects/class/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo: Todo;

  todoForm: FormGroup;

  @Output() newTodoItem = new EventEmitter<Todo>();

  constructor(private todoFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initiateTodoForm();
  }

  initiateTodoForm(): void{
 
    this.todoForm = this.todoFormBuilder.group({
      title: new FormControl(null, [Validators.required])      
    });

  }

  onSubmit() {    
    this.newTodoItem.emit(this.todoForm.value as Todo);
    this.todoForm.reset();
  }

}
