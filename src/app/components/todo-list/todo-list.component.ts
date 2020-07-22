import {Component, OnInit} from '@angular/core';
import {TodoService} from 'src/app/services/todo.service';
import {TaskFacade} from '../../store/task.facade';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  public items: any[];

  constructor(private todoService: TodoService,
              private taskFacade: TaskFacade) {
  }

  public ngOnInit(): void {
    this.todoService.getTodos().subscribe(items => this.items = items);
  }

  public openModal(): void {
  }
}
