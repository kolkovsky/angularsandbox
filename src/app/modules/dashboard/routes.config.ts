import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)},
      {path: 'trash', loadChildren: () => import('./modules/trash/trash.module').then(m => m.TrashModule)},
      {path: '', redirectTo: 'tasks', pathMatch: 'full'}
    ]
  },
];
