import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StaticConfigurationService } from '../../../shared/services/staticconfiguration.service';
export interface ConfirmModel {
  selectedRow: any;
  message: string;
}


@Component({
  selector: 'app-edit-static-configurations',
  templateUrl: './edit-static-configurations.component.html',
  styleUrls: ['./edit-static-configurations.component.css']
})
export class EditStaticConfigurationsComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  selectedRow: any;
  message: string;
  myGroup: any;
  ratingKey: any;
  editStaticConfFormGroup: FormGroup;
  ratingFormGroup1: FormGroup;
  percentage:any;
  rating: any;
  serverSideError: any;

  error_msg: string = "Please provide valid percentage";
  //get rating() {return this.staticConfFormGroup.get('rating'); }
  //get percentage() {return this.staticConfFormGroup.get('percentage'); }
  constructor(dialogService: DialogService, private fb: FormBuilder,
    private staticConfService: StaticConfigurationService) {
    super(dialogService);
    this.editStaticConfFormGroup = this.fb.group({
      percentage: ['',  [Validators.required]]
    });
  }
  trim(str){
    return String(str).trim();
  }
  ngOnInit() {
    const myObj = JSON.parse(this.selectedRow);
    this.percentage = myObj.percentage;
    console.log("percentage: ", this.percentage);
    //this.rating = myObj.rating;

    /*this.editStaticConfFormGroup = this.fb.group({
      percentage: ['',  [Validators.required]]
    });*/
    //this.staticConfFormGroup.percentage.value = myObj.percentage.value;
    // this.addDDGroup.setValue({addDDEditable:'Y'});
  }
  editAction() {
    const myObj = JSON.parse(this.selectedRow);
    const percentage = this.trim(this.editStaticConfFormGroup.value.percentage);
     this.ratingFormGroup1 =  this.fb.group({
      rating:  myObj.rating,
      ratingKey: 0
     });

    const formGroupJson = this.editStaticConfFormGroup.value;
    console.log(formGroupJson);
  
    const addStaticConfJson = JSON.stringify({
      percentage: percentage,
      appUserName: "ecbledexpert",
      id: myObj.id,
      validFrom: myObj.validFrom,
      validTo: myObj.validTo,
      status: myObj.status,
      ratingKey: this.ratingFormGroup1.value

    });
    this.staticConfService.editStaticConf(addStaticConfJson).subscribe(
      success => this.handleSubmitSuccess(success),
       error => this.handleSubmitError(error)
    );
    this.close();
   }
   //trim(str){
    //return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  //}
  protected handleSubmitError(error: any) {
    console.log('handleSubmitError', error);
      this.error_msg= this.createJsonResp(error);
      this.close();
  }
  protected handleSubmitSuccess(data: any) {
  }
  private createJsonResp(data) {
    let status = "success"
    if(data && data.status != 200){
      status = "error";
    }
    const jsonstring = JSON.stringify({
      result: status,
      body: data._body
    });
    return jsonstring;
  }
}
