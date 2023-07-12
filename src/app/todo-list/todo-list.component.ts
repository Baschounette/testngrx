import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../model/todo-item';
import { ServiceService } from '../service/service.service';
import { Store } from '@ngrx/store';
import { State } from '../store/todo.selectors';
import * as StoreActions from '../store/todo.actions';
import { v4 as uuid } from 'uuid';

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

  addTask(description: string) {
    this.store.dispatch(StoreActions.newItem({item : {id: uuid(), description: description, isCompleted: false}}));
  }

  rmTask(item: { id: any; }) {
    this.store.dispatch(StoreActions.deleteItem({id: item.id}));
  }

  changeChecked(item: any, isCompleted: boolean) {
    this.store.dispatch(StoreActions.changeCheckItem({id: item.id, isCompleted: isCompleted}));
  }



}
