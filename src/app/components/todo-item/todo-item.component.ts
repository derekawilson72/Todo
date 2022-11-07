import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Output() delete = new EventEmitter<Todos>();
  @Input() todo:Todos = {} as Todos;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(): void {
    console.log("deleting " + this.todo);  
    this.delete.emit(this.todo);
  }

  markComplete(): void {
    console.log("marking item complete" + this.todo);
    this.todo.complete = true;

  }

}
