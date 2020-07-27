import {Component, OnInit} from '@angular/core';
import {TaskFacade} from '../../store/task.facade';
import {Task} from 'src/app/models/task';
import {Observable} from 'rxjs';
import {ModalService} from '../../../../services/modal.service';
import {TestService} from '../../../../services/test.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  providers: [TestService]
})
export class TodoListComponent implements OnInit {
  public items: any[];
  public tasks$: Observable<Task[]> = this.taskFacade.tasks$;

  constructor(private taskFacade: TaskFacade) {
  }

  public ngOnInit(): void {
    this.taskFacade.getTasks();
    this.tasks$.subscribe((tasks: Task[]) => this.items = tasks);
  }

  public openModal(): void {
    //this.modalService.openModal(ModalComponent);
  }
}
