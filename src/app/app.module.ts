import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {ModalService} from './services/modal.service';

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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    StoreModule.forRoot({taskState: taskReducer}),
    EffectsModule.forRoot([TaskEffects]),
    FormsModule
  ],
  providers: [TodoService, TaskFacade, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
