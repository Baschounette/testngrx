import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import { Store } from '@ngrx/store';
import * as TodoActions from '../store/todo.actions';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private store: Store<{ tasks: Task[] }>) { }

  addTask(task: Task) {
    this.store.dispatch(TodoActions.addTask({ task }));
  }

  deleteTask(taskId: number) {
    this.store.dispatch(TodoActions.deleteTask({ taskId }));
  }

  toggleTaskCompletion(taskId: number) {
    this.store.dispatch(TodoActions.toggleTaskCompletion({ taskId }));
  }

  getTasks(): Observable<Task[]> {
    return this.store.select(state => state.tasks);
  }


}
