import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)},
      {path: 'trash', loadChildren: () => import('./modules/trash/trash.module').then(m => m.TrashModule)},
      {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
];
