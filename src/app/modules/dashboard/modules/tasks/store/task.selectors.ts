import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../../../../store/app.states';
import {TaskState} from './task.state';

export const taskStateKey = 'taskState';
export const selectTaskState = createFeatureSelector<AppState, TaskState>(taskStateKey);
export const selectTaskStateTasks = createSelector(selectTaskState, (state: TaskState) => state.tasks);
