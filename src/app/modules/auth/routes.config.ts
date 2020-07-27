import {Route} from '@angular/router';
import {LoginComponent} from './components/login/login.component';

export const routes: Route[] = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
