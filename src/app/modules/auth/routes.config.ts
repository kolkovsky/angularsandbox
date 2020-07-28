import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RestoreComponent} from './components/restore/restore.component';
import {FormComponent} from './components/form/form.component';
import {RegistrationComponent} from './components/registration/registration.component';

export const routes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      {path: 'restore', component: RestoreComponent},
      {path: 'login', component: FormComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: '', redirectTo: 'login'}
    ]
  },
  {path: '', redirectTo: 'auth', pathMatch: 'full'}
];
