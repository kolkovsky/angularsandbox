import {Component, OnInit, Input} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {TaskFacade} from '../../store/task.facade';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public item: any;

  constructor(private taskFacade: TaskFacade) {
  }

  public ngOnInit(): void {
  }

  public changeState(state: MatCheckboxChange): void {
    if (state.checked) {
      this.taskFacade.completeTask(this.item.id);
    } else {
      this.taskFacade.uncompletedTask(this.item.id);
    }
  }
}
