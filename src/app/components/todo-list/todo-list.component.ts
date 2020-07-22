import {Component, OnInit} from '@angular/core';
import {TaskFacade} from '../../store/task.facade';
import {Task} from 'src/app/models/task';
import {Observable} from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
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
}
