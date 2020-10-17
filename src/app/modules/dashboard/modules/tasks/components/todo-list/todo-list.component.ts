import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {TaskFacade} from '../../store/task.facade';
import {Task} from 'src/app/models/task';
import {Observable} from 'rxjs';
import {ModalService} from '../../../../../../services/modal.service';
import {TestService} from '../../../../../../services/test.service';
import { TASK_INFO, TODO_LIST_PROVIDERS } from './todo-list.provider';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  providers: [TODO_LIST_PROVIDERS],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {

  constructor(@Inject(TASK_INFO) public readonly tasks: Observable<{}>) {
  }

  public openModal(): void {
    //this.modalService.openModal(ModalComponent);
  }
}
