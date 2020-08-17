import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { SharedModule } from "../../../shared.module";

@NgModule({
  declarations: [HeaderComponent],
  providers: [],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
