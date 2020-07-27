import {Component, OnInit} from '@angular/core';
import {TaskFacade} from '../../modules/tasks/store/task.facade';
import {Task} from 'src/app/models/task';
import {Priority} from '../../models/priority';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-view',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  public task: Task;
  public priorityValues: string[] = Object.keys(Priority);

  constructor() {
  }

  public ngOnInit(): void {
    this.task = {
      isDone: false,
      name: '',
      priority: '',
    };
  }

  public createTask(): void {
    // this.taskFacade.addTask(this.task);
    // this.dialogRef.close();
  }
}
