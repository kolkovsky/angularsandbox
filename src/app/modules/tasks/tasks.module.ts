import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoItemDetailsComponent} from './components/todo-item-details/todo-item-details.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared.module';
import {StoreModule} from '@ngrx/store';
import {taskReducer} from './store/task.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './store/task.effects';
import {TodoService} from '../../services/todo.service';
import {taskStateKey} from './store/task.selectors';
import {routes} from './routes.config';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoItemDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(taskStateKey, taskReducer),
    EffectsModule.forFeature([TaskEffects]),
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [TodoService]
})
export class TasksModule {
}
