import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { RuleStepService } from '../../../shared/services/rulestep.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
export interface ConfirmModel {
  selectedRow: any;
  message: string;
}
@Component({
  selector: 'app-edit-rule-step',
  templateUrl: './edit-rule-step.component.html',
  styleUrls: ['./edit-rule-step.component.css']
})
export class EditRuleStepComponent  extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  
  selectedRow: any;
  message: string;
  ruleContent: any;
  stepId: string;
  activeid: string;
  resultid: string;
  ruleSetId: string;
  serverSideError;
  ruleId: string;
  editRuleSetForm: FormGroup;
  protected result: any;
  error_msg: string = "Please provide valid Rule Content";
  constructor(dialogService: DialogService, private ruleStepService: RuleStepService, public fbAddModule: FormBuilder) {

    super(dialogService);
    this.editRuleSetForm = this.fbAddModule.group(
      {
        ruleContent: ['', [Validators.required]]
      });
    //console.log("selectedRow......",this.selectedRow);
  } 
 

  ngOnInit() {
    const myObj = JSON.parse(this.selectedRow);
    console.log("ngOnInit......",myObj.contentid);
    this.ruleSetId = myObj.ruleSetId;
    this.ruleContent = myObj.contentid;
    this.stepId = myObj.stepid;
    this.activeid = myObj.activeid;
    this.resultid = myObj.resultid;
    this.ruleId = myObj.ruleId;
  } 
  saveRuleStep(){
    //debugger;
    console.log('ruleContent Size: ',this.editRuleSetForm.value.ruleContent.trim().size);
    const editRuleStepRequest = JSON.stringify({
      ruleContent: this.editRuleSetForm.value.ruleContent.trim()
    });
    console.log("editRuleStepRequest---",editRuleStepRequest);
    this.ruleStepService.editRule(this.ruleId, editRuleStepRequest).subscribe(
       success => this.handleSubmitSuccess(success),
       error => this.handleSubmitError(error)
    );

    this.close();
  }
  protected handleSubmitError(error: any) {
    console.log('handleSubmitError', error);
    if (error.errorList != null && error.errorList.length > 0) {
      this.serverSideError = error.errorList;
      //this.addDataCollection.setErrors({'errorResponse': true});
    } else {
      this.result = this.createJsonResp(error);
      //this.close();
    }
  }
  protected handleSubmitSuccess(data: any) {
    if (data.errorList != null && data.errorList.length > 0) {
      this.serverSideError = data.errorList;
      //this.addDataCollection.setErrors({'errorResponse': true});
    } else {
      this.result = this.createJsonResp(data);
      //this.close();
    }
  }
  private createJsonResp(data) {
    const jsonstring = JSON.stringify({
      result: 'success',
      id: data.id
    });
    return jsonstring;
  }

}