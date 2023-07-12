import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../model/todo-item';
import { ServiceService } from '../service/service.service';
import { Store } from '@ngrx/store';
import { State } from '../store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoList: Observable<TodoItem[]> | undefined;

  constructor(private service: ServiceService, private store: Store<State>) {

  }

  ngOnInit() {
    this.todoList = this.service.getTodoList();
  }



}
