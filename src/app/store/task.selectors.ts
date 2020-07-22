import {createSelector} from '@ngrx/store';
import {TaskState} from './task.reducer';
import {AppState} from './app.states';

export const selectTaskState = (appState: AppState) => appState.taskState;
export const getAllTasks = createSelector(selectTaskState, (state: TaskState) => {
  console.log(state);
  return state.tasks;
});

