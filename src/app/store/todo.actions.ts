import { createAction, props } from "@ngrx/store";
import { Task } from "../model/task";

export const addTask = createAction(
  "[Todo List] add",
  props<{ task: Task }>()
);
export const deleteTask = createAction(
  "[Todo List] delete",
  props<{ taskId: number }>()
);
export const toggleTaskCompletion = createAction(
  "[Todo List] Toggle Completion",
  props<{ taskId: number }>()
);