import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared.module';
import { HomeComponent } from './home.component';
import { routes } from './routes.config';

@NgModule({
    imports: [SharedModule, CommonModule, RouterModule.forChild(routes) ],
    declarations: [HomeComponent]
})
export class HomeModule {
}