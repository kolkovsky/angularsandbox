import { Routes } from "@angular/router";
import { AuthGuard } from './modules/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "dashboard",
    // canActivate: [AuthGuard],
    loadChildren: () => import("./modules/dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
];
