import {Inject, Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Add, Complete, Delete, Uncomplete} from './task.action';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(private store: Store<any>) {
  }

  public addTask(taskModel: any): void {
    this.store.dispatch(new Add(taskModel));
  }

  public completeTask(id: string): void {
    this.store.dispatch(new Complete({id}));
  }

  public uncompleteTask(id: string): void {
    this.store.dispatch(new Uncomplete({id}));
  }

  public deleteTask(id: string): void {
    this.store.dispatch(new Delete({id}));
  }
}
