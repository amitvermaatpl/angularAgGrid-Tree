import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TreePortfolioService } from '../../../shared/services/tree-portfolio.service';

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent extends DialogComponent<ConfirmModel, String> implements ConfirmModel {

  title: string;
  message: string;
  addChildPortfolioForm: FormGroup;
  statusTypes = ['Active', 'Inactive'];
  statusSelected= 'Active';

  constructor(dialogService: DialogService, public fbAddModule: FormBuilder, private portfolioTreeService: TreePortfolioService) {
    super(dialogService);
    this.addChildPortfolioForm = this.fbAddModule.group(
      {
        name: ['', [Validators.required]],
        id: ['', [Validators.required]],
        parentId: ['', [Validators.required]],
        description: ['', [Validators.required]],
        active: ['', [Validators.required]],
        rarId: ['', [Validators.required]],
        portfolioCode: ['', [Validators.required]]
        /* validFrom: ['', [Validators.required]],
        validTo: ['', [Validators.required]] */
      });

  }

  get name() { return this.addChildPortfolioForm.get('name'); }
  get id() { return this.addChildPortfolioForm.get('id'); }
  get parentId() { return this.addChildPortfolioForm.get('parentId'); }
  get description() { return this.addChildPortfolioForm.get('description'); }
  get active() { return this.addChildPortfolioForm.get('active'); }
  get rarId() { return this.addChildPortfolioForm.get('rarId'); }
  get portfolioCode() { return this.addChildPortfolioForm.get('portfolioCode'); }
  /* get validFrom() { return this.addChildPortfolioForm.get('validFrom'); }
  get validTo() { return this.addChildPortfolioForm.get('validTo'); } */

  save() {
    //debugger
    const addChildJson = this.addChildPortfolioForm.value;
    
    console.log("=====Add child portfolio======> ",addChildJson);
    const parentId = this.addChildPortfolioForm.value.parentId;
    this.portfolioTreeService.addChildPortfolio(addChildJson, parentId).subscribe(
      success => this.handleSubmitSuccess(success),
    );
  }

  protected handleSubmitSuccess(data: any) {
    // console.log(data);
    this.result = this.createJsonResp(data);
    this.close();
  }

  private createJsonResp(data) {
    const jsonstring = JSON.stringify({
      result: 'success',
      id: data.id,
      name: data.name
    });
    return jsonstring;
  }


}