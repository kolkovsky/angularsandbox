import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {RestoreComponent} from './components/restore/restore.component';
import {FormComponent} from './components/form/form.component';
import {SharedModule} from '../shared.module';
import {routes} from './routes.config';
import {RegistrationComponent} from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RestoreComponent, FormComponent, RegistrationComponent],
  providers: [],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class AuthModule {
}
