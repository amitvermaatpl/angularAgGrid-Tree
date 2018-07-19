import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title: string;
  message: string;
}


@Component({
  selector: 'app-approve-static-configurations',
  templateUrl: './approve-static-configurations.component.html',
  styleUrls: ['./approve-static-configurations.component.css']
})
export class ApproveStaticConfigurationsComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  } 
  editAction() {
    const disposable = this.dialogService.addDialog(ApproveStaticConfigurationsComponent, {

    }).subscribe((addResult) => {
    
    });
   }

}

