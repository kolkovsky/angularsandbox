import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  AddTaskAction, AddTaskFailedAction,
  AddTaskSuccessAction,
  GetTaskFailedAction,
  GetTasksAction,
  GetTaskSuccessAction,
  TaskActionTypes
} from './task.action';
import {catchError, concatMap, map} from 'rxjs/operators';
import {TasksService} from '../../../services/tasks.service';
import {Task} from '../../../models/task';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions,
              private taskService: TasksService) {
  }

  @Effect() public loadTask$: Observable<Action> = this.actions$.pipe(
    ofType(TaskActionTypes.GET_TASKS),
    concatMap(({payload: {}}: GetTasksAction) => {
      return this.taskService.getTasks().pipe(
        map((tasks: Task[]) => new GetTaskSuccessAction({tasks})),
        catchError((error: any) => of(new GetTaskFailedAction({error})))
      );
    })
  );

  @Effect() public addTask$: Observable<Action> = this.actions$.pipe(
    ofType(TaskActionTypes.ADD_TASK),
    concatMap((action: AddTaskAction) => {
      return this.taskService.addTask(action.payload).pipe(
        map((task: Task) => new AddTaskSuccessAction(task)),
        map(() => new GetTasksAction()),
        catchError((error => of(new AddTaskFailedAction({error}))))
      );
    })
  );
}
