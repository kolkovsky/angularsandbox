import {Action} from '@ngrx/store';

export enum TaskActionTypes {
  ADD_TASK = '[Task Action] Add Task',
  COMPLETE_TASK = '[Task Action] Complete Task',
  UNCOMPLETE_TASK = '[Task Action] Uncomplete Task',
  DELETE_TASK = '[Task Action] Delete Task'
}

export class Add implements Action {
  public readonly type: string = TaskActionTypes.ADD_TASK;

  constructor(public payload: any) {
  }
}

export class Complete implements Action {
  public readonly type: string = TaskActionTypes.COMPLETE_TASK;

  constructor(public payload: { id: string }) {
  }
}

export class Uncomplete implements Action {
  public readonly type: string = TaskActionTypes.UNCOMPLETE_TASK;

  constructor(public payload: { id: string }) {
  }
}

export class Delete implements Action {
  public readonly type: string = TaskActionTypes.DELETE_TASK;

  constructor(public payload: { id: string }) {
  }
}

export type TaskActionType = Add | Complete | Delete;
