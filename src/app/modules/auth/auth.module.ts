import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {RestoreComponent} from './components/restore/restore.component';
import {FormComponent} from './components/form/form.component';
import {SharedModule} from '../shared.module';
import {routes} from './routes.config';

@NgModule({
  declarations: [LoginComponent, RestoreComponent, FormComponent],
  providers: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class AuthModule {
}
