import {Component, OnInit, Input, Host, Optional, Self} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {TaskFacade} from '../../store/task.facade';
import {TestService} from '../../../../services/test.service';
import {Test} from 'tslint';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {

  @Input()
  public item: any;

  constructor() {
  }

  public ngOnInit(): void {
    // if (this.testService) {
    //   console.log(this.testService.getServiceId());
    // }
  }

  public changeState(state: MatCheckboxChange): void {
    // if (state.checked) {
    //   this.taskFacade.completeTask(this.item.id);
    // } else {
    //   this.taskFacade.uncompletedTask(this.item.id);
    // }
  }
}
