import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { routes } from "./routes.config";
import { HeaderModule } from "./modules/header/header.module";
import { SidebarContentComponent } from './components/sidebar-content/sidebar-content.component';

@NgModule({
  declarations: [DashboardComponent, SidebarContentComponent, ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), HeaderModule],
})
export class DashboardModule {}
