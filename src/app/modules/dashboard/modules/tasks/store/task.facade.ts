import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AddTaskAction, CompleteTaskAction, DeleteTaskAction, UncompletedTaskAction, GetTasksAction} from './task.action';
import {Task} from '../../../../../models/task';
import {AppState} from '../../../../../store/app.states';
import {selectTaskStateTasks} from './task.selectors';
import {Observable} from 'rxjs';
import {TaskState} from './task.state';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  public tasks$: Observable<Task[]> = this.store.pipe(select(selectTaskStateTasks));

  constructor(private store: Store<any>) {
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
