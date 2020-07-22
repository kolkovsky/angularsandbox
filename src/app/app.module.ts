import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Store, StoreModule} from '@ngrx/store';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TodoService} from './services/todo.service';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {taskReducer} from './store/task.reducer';
import {TaskFacade} from './store/task.facade';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalComponent} from './components/modal/modal.component';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './store/task.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forRoot({taskState: taskReducer}),
    EffectsModule.forRoot([TaskEffects])
  ],
  providers: [TodoService, TaskFacade],
  bootstrap: [AppComponent]
})
export class AppModule {
}
