import { ActionReducerMap, createSelector } from "@ngrx/store";
import { TodoListState } from "./todo.reducer"
import * as fromTodoListReducers from './todo.reducer';

export interface State {
  todoList: TodoListState
}

export const reducers: ActionReducerMap<State> = {
  todoList: fromTodoListReducers.reducer
}

export const getRootState = (state: State) => state.todoList;

export const getTodoItems = createSelector(
  getRootState,
  (state: TodoListState) => state.items
)