import {TaskActionType, TaskActionTypes} from './task.action';
import {TaskState, initialTaskState} from './task.state';

export function taskReducer(state: TaskState = initialTaskState, action: TaskActionType): TaskState {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        addedTask: action.payload
      };
    case TaskActionTypes.COMPLETE_TASK:
      state.completedTasksIds.push(action.payload);
      return {
        ...state
      };
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        deletedTask: action.payload
      };
    case TaskActionTypes.UNCOMPLETED_TASK:
      state.uncompletedTasksIds.push(action.payload);
      return {
        ...state
      };
    case TaskActionTypes.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload.tasks
      };
    default:
      return {
        ...state
      };
  }
}
