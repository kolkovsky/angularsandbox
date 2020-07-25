import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/portal';
import {MatDialogRef} from '@angular/material/dialog/dialog-ref';

export interface ModalConfig {
  width?: string;
  height?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private openModalService: MatDialog) {
  }

  public openModal(modal: ComponentType<any>, config: ModalConfig = {width: '400px'}): MatDialogRef<any> {
    return  this.openModalService.open(modal, config);
  }
}
