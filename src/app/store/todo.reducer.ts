import { createReducer, on } from "@ngrx/store";
import { Task } from "../model/task";
import * as TodoActions from './todo.actions';

export const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(TodoActions.addTask, (state, { task }) =>
    [...state, task]),
  on(TodoActions.deleteTask, (state, { taskId }) =>
    state.filter(task => task.id !== taskId)),
  on(TodoActions.toggleTaskCompletion, (state, { taskId }) =>
    state.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    }))
)
