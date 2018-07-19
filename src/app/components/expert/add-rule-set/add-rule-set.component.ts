import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { RuledesignService } from '../../../shared/services/ruledesign.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/validations/common-validators';
export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'app-add-rule-set',
  templateUrl: './add-rule-set.component.html',
  styleUrls: ['./add-rule-set.component.css']
})
export class AddRuleSetComponent extends DialogComponent<ConfirmModel, String> implements ConfirmModel {
  title: string;
  message: string;
  addRuleSetForm: FormGroup;
  error_msg: string = "Please provide valid Name";
  //error_msg_invalid: string = "Please provide valid Name";
  constructor(dialogService: DialogService, private ruleDesignService: RuledesignService, public fbAddModule: FormBuilder
  ) {
  super(dialogService);
  this.addRuleSetForm = this.fbAddModule.group(
    { 
      name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      rulesetMode: ['',[]],
      rulesetDesc: ['', []]
    });
  }
  get name() { return this.addRuleSetForm.get('name'); }
  get rulesetMode() { return this.addRuleSetForm.get('rulesetMode'); }
  get rulesetDesc() { return this.addRuleSetForm.get('rulesetDesc'); }
  save() {
    console.log('TEST SAVE CALLLLLLLLLLLL');
    // Post JSON for module
    const addRuleSetJson = this.addRuleSetForm.value;
    console.log(addRuleSetJson);
    this.ruleDesignService.addRuleSet(addRuleSetJson).subscribe(
      success => this.handleSubmitSuccess(success),
      // error => this.handleSubmitError(error)
    );
  }
  trim(str){
    return str.trim();
  }
  protected handleSubmitSuccess(data: any) {
    this.result = this.createJsonResp(data);
    this.close();
  }
  private createJsonResp(data) {
    const jsonstring = JSON.stringify({
      result: 'success',
      id: data.id,
      name: data.name,
      description: data.rulesetDesc,
      mode: data.rulesetMode
    });
    return jsonstring;
  }
}
