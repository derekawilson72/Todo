import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todos[] = [
    {task:"task A",
     complete:false
     },
    {task:"task B",
     complete:false}
  ];


  addNewTodo(newTodo:Todos):void{

    this.todos.push(newTodo);    

  }

  deleteTodo(todo:Todos):void{
    let index:number = this.todos.findIndex(c => 
      (c.task==todo.task) 
    );
    this.todos.splice(index,1);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  
}
