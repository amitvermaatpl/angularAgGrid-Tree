import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TreePortfolioService } from '../../../shared/services/tree-portfolio.service';
export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent extends DialogComponent<ConfirmModel, String> implements ConfirmModel  {
  title: string;
  message: string;
  editChildPortfolioForm: FormGroup;

  constructor(dialogService: DialogService, public fbAddModule: FormBuilder, private portfolioTreeService: TreePortfolioService) {
    super(dialogService);
    this.editChildPortfolioForm = this.fbAddModule.group(
      {
        portfolioName: ['', [Validators.required]],
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

  get portfolioName() { return this.editChildPortfolioForm.get('portfolioName'); }
  get id() { return this.editChildPortfolioForm.get('id'); }
  get parentId() { return this.editChildPortfolioForm.get('parentId'); }
  get description() { return this.editChildPortfolioForm.get('description'); }
  get active() { return this.editChildPortfolioForm.get('active'); }
  get rarId() { return this.editChildPortfolioForm.get('rarId'); }
  get portfolioCode() { return this.editChildPortfolioForm.get('portfolioCode'); }
  /* get validFrom() { return this.editChildPortfolioForm.get('validFrom'); }
  get validTo() { return this.editChildPortfolioForm.get('validTo'); } */

  save() {
    const addChildJson = this.editChildPortfolioForm.value;

    console.log(addChildJson);
    const parentId = this.editChildPortfolioForm.value.parentId;
    console.log("========EDIT Portfolio=====")
    this.portfolioTreeService.editPortfolio(addChildJson, parentId).subscribe(
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
