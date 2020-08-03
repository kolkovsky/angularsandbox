import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemsComponent} from './components/list-items/list-items.component';
import {RemovedItemComponent} from './components/removed-item/removed-item.component';

@NgModule({
  declarations: [ListItemsComponent, RemovedItemComponent],
  imports: [
    CommonModule
  ]
})
export class TrashModule {
}
