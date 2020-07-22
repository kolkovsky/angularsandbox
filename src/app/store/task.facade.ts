import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AddTaskAction, CompleteTaskAction, DeleteTaskAction, UncompletedTaskAction, GetTasksAction} from './task.action';
import {Task} from '../models/task';
import {Observable} from 'rxjs';
import {getAllTasks} from './task.selectors';
import {AppState} from './app.states';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  public tasks$: Observable<Task[]> = this.store.pipe(select(getAllTasks));

  constructor(private store: Store<AppState>) {
  }

  public addTask(taskModel: any): void {
    this.store.dispatch(new AddTaskAction(taskModel));
  }

  public completeTask(id: string): void {
    this.store.dispatch(new CompleteTaskAction({id}));
  }

  public uncompletedTask(id: string): void {
    this.store.dispatch(new UncompletedTaskAction({id}));
  }

  public deleteTask(task: Task): void {
    this.store.dispatch(new DeleteTaskAction(task));
  }

  public getTasks(): void {
    this.store.dispatch(new GetTasksAction({}));
  }
}
