import {Route} from '@angular/router';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoItemDetailsComponent} from './components/todo-item-details/todo-item-details.component';

export const routes: Route[] = [
  {
    path: '',
    component: TodoListComponent,
    children: [
      {
        path: ':id',
        component: TodoItemDetailsComponent
      }
    ]
  },
  {
    pathMatch: '**',
    redirectTo: ''
  }
];
