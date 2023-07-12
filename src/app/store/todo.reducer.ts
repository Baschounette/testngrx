import { Action, createReducer, on } from "@ngrx/store";
import { TodoItem } from "../model/todo-item";
import * as TodoActions from './todo.actions';

export interface TodoListState {
  items: TodoItem[];
}

export const initialState: TodoListState = {
  items: []
};

const todoListReducer = createReducer(
  initialState,
  on(TodoActions.newItem, (state, { item }) => ({
    ...state, items: state.items.concat(item)
  })),
  on(TodoActions.deleteItem, (state, { id }) => ({
    ...state, items: deleteItemFromList(state.items, id)
  })),
  on(TodoActions.changeCheckItem, (state, { id, isCompleted }) => ({
    ...state, items: changeCheckedTaskFromList(state.items, id, isCompleted)
  }))
)

function deleteItemFromList(list: TodoItem[], id: number): TodoItem[] {
  return list.filter((e) => {
    return e.id !== id
  })
}

function changeCheckedTaskFromList(list: TodoItem[], id: number, isCompleted: boolean): TodoItem[] {
  return list.map(e => {
    if (e.id === id) {
      return { ...e, isCompleted: isCompleted }
    } else {
      return e
    }
  })
}

export function reducer(state: TodoListState | undefined, actions: Action) {
  return todoListReducer(state, actions);
}