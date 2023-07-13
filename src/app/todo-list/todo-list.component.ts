import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  tasks$: Observable<Task[]>;
  newTask: string = '';

  constructor(private service: ServiceService) {
    this.tasks$ = this.service.getTasks();
  }

  addTask() {
    const task: Task = {
      id: Date.now(),
      description: this.newTask,
      isCompleted: false
    };
    this.service.addTask(task);
    this.newTask = '';
  }

  deleteTask(taskId: number) {
    this.service.deleteTask(taskId);
  }

  toggleTaskCompletion(taskId: number) {
    this.service.toggleTaskCompletion(taskId);
  }



}
