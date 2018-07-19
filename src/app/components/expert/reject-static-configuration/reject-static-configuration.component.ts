import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { ConfirmModel } from '../approve-static-configurations/approve-static-configurations.component';
export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-reject-static-configuration',
  templateUrl: './reject-static-configuration.component.html',
  styleUrls: ['./reject-static-configuration.component.css']
})
export class RejectStaticConfigurationComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  } 

  rejectAction() {
    const disposable = this.dialogService.addDialog(RejectStaticConfigurationComponent, {

    }).subscribe((addResult) => {
    
    });
   }

}
