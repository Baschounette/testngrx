import { createAction, props } from "@ngrx/store";
import { TodoItem } from "../model/todo-item";

export const newItem = createAction("[Todo List] Ajout d'une tache a faire",
  props<{ item: TodoItem }>());
export const deleteItem = createAction("[Todo List] suprimer une tache a faire",
  props<{ id: string }>());
export const changeCheckItem = createAction("[Todo List] Valide ou dévalide la tache",
  props<{ id: string, isCompleted: boolean }>());