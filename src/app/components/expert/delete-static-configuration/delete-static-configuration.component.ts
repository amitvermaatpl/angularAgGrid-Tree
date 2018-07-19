import { Component, OnInit } from '@angular/core';
import { ConfirmModel } from '../approve-static-configurations/approve-static-configurations.component';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-delete-static-configuration',
  templateUrl: './delete-static-configuration.component.html',
  styleUrls: ['./delete-static-configuration.component.css']
})
export class DeleteStaticConfigurationComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  } 

  editAction() {
    const disposable = this.dialogService.addDialog(DeleteStaticConfigurationComponent, {

    }).subscribe((addResult) => {
    
    });
   }


}
