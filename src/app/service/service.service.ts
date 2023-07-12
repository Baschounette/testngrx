import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoItem } from '../model/todo-item';
import { Store } from '@ngrx/store';
import { State } from '../store/todo.selectors';
import * as fromTodoListSelectors from '../store/todo.selectors';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

  constructor(private store: Store<State>) {
    this.getItemOfListFromStore();
  }

  getItemOfListFromStore() {
    this.store.select(fromTodoListSelectors.getTodoItems).subscribe(value => this.todoListSubject.next(value));
  }

  getTodoList() {
    return this.todoListSubject.asObservable();
  }

}
