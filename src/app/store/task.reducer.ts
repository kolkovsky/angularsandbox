import {TaskActionType, TaskActionTypes} from './task.action';

export function taskReducer(state: any = {}, action: TaskActionType) {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        task: action.payload
      };
    case TaskActionTypes.COMPLETE_TASK:
      return {
        ...state,
        ...action.payload
      };
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      break;
  }
}
