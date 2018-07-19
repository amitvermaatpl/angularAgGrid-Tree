
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { RuleStepService } from '../../../shared/services/rulestep.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
export interface ConfirmModel {
  selectedRow: any;
  result: any;
}
@Component({
  selector: 'app-confirmation-dialogs',
  templateUrl: './confirmation-dialogs.component.html',
  styleUrls: ['./confirmation-dialogs.component.css']
})
export class ConfirmationDialogsComponent  extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  selectedRow: any;
  message: string;
  title: string ;
  result: any;
  private params: any;
  constructor(dialogService: DialogService, private ruleStepService: RuleStepService, public fbAddModule: FormBuilder) {
    super(dialogService);
  } 
  ngOnInit() {
    this.message  = JSON.parse(this.selectedRow.toString()).message;
    this.title = JSON.parse(this.selectedRow.toString()).title; 
  }
  confirm(){
    this.close();
    return this.handleSubmitSuccess('yes');
  } 
  cancel(){
    this.close();
    return this.handleSubmitSuccess('no');
  } 
  protected handleSubmitSuccess(data: any) {
    this.result = this.createJsonResp(data);
    this.close();
  }
  private createJsonResp(data) {
    const jsonstring = JSON.stringify({
      result: data,
    });
    return jsonstring;
  }
  
}