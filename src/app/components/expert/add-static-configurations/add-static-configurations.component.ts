import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StaticConfigurationService } from '../../../shared/services/staticconfiguration.service';
export interface ConfirmModel {
  selectedRow: any;
  message: string;
}


@Component({
  selector: 'app-static-configurations',
  templateUrl: './add-static-configurations.component.html',
  styleUrls: ['./add-static-configurations.component.css']
})
export class AddStaticConfigurationsComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  selectedRow: any;
  message: string;
  myGroup: any;
  ratingKey: any;
  staticConfFormGroup: FormGroup;
  ratingFormGroup1: FormGroup;
  get rating() {return this.staticConfFormGroup.get('rating'); }
  get percentage() {return this.staticConfFormGroup.get('percentage'); }
  constructor(dialogService: DialogService, private fb: FormBuilder,
    private staticConfService: StaticConfigurationService) {
    super(dialogService);
    

    this.myGroup = new FormGroup({
      rating: new FormControl(),
      Percentage: new FormControl()
   });
  }
  trim(str){
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
  ngOnInit() {
    this.staticConfFormGroup = this.fb.group({
      rating: ['', [Validators.required]],
      percentage: ['',  [Validators.required]]
    });
  }
  addAction() {
    console.log("this.staticConfFormGroup: ",this.staticConfFormGroup);
    const rating = this.staticConfFormGroup.value.rating;
     this.ratingFormGroup1 =  this.fb.group({
       rating:  this.trim(this.staticConfFormGroup.value.rating),
       ratingKey: '0'
     });

    const formGroupJson = this.staticConfFormGroup.value;
    console.log(formGroupJson);
    const addStaticConfJson = JSON.stringify({
      percentage: this.trim(formGroupJson.percentage),
      appUserName: "testLedExpert",
      ratingKey: this.ratingFormGroup1.value
    });
    this.staticConfService.addStaticConf(addStaticConfJson).subscribe(
      success => this.handleSubmitSuccess(success)
       //error => this.handleSubmitError(error)
    );
    this.close();
   }
   protected handleSubmitSuccess(data: any) {
    //this.result = this.createJsonResp(data);
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
