import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import {
  AddTaskAction,
  AddTaskFailedAction,
  AddTaskSuccessAction,
  CompleteTaskAction,
  GetTaskFailedAction,
  GetTasksAction,
  GetTaskSuccessAction,
  TaskActionTypes,
  UncompletedTaskAction,
} from "./task.action";
import { catchError, concatMap, map } from "rxjs/operators";
import { TasksService } from "../../../../../services/tasks.service";
import { Task } from "../../../../../models/task";

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TasksService) {}

  @Effect() public loadTask$: Observable<Action> = this.actions$.pipe(
    ofType(TaskActionTypes.GET_TASKS),
    concatMap(({ payload: {} }: GetTasksAction) => {
        return this.taskService.getTasks().pipe(
        map((tasks: Task[]) => new GetTaskSuccessAction({ tasks })),
        catchError((error: any) => of(new GetTaskFailedAction({ error })))
      );
    })
  );

  @Effect() public addTask$: Observable<Action> = this.actions$.pipe(
    ofType(TaskActionTypes.ADD_TASK),
    concatMap((action: AddTaskAction) => {
      return this.taskService.addTask(action.payload).pipe(
        map((task: Task) => new AddTaskSuccessAction(task)),
        map(() => new GetTasksAction()),
        catchError((error) => of(new AddTaskFailedAction({ error })))
      );
    })
  );

  @Effect() public readonly completeTask$: Observable<Action> = this.actions$.pipe(
    ofType(TaskActionTypes.COMPLETE_TASK),
    concatMap((action: CompleteTaskAction) => {
      return this.taskService.completeTask(action.payload.id).pipe(
        map(() => new GetTasksAction()),
        catchError(error => of(new GetTaskFailedAction({error})))
      );
    })
  );

  @Effect() public readonly uncompleteTask$: Observable<Action> = this.actions$.pipe(
    ofType(TaskActionTypes.UNCOMPLETED_TASK),
    concatMap((action: UncompletedTaskAction) => {
      return of(null);
    }),
  )
}
