import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() newTodo = new EventEmitter<Todos>();

  todo:Todos = {} as Todos;


  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void {
    let result:Todos = { ...this.todo };
    this.newTodo.emit(result);
    this.todo = {} as Todos;
    this.todo.complete = false;
  }

}
