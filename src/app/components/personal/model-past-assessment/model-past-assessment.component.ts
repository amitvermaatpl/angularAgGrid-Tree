import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface PastAssessmentModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-model-past-assessment',
  templateUrl: './model-past-assessment.component.html',
  styleUrls: ['./model-past-assessment.component.css']
})

export class ModelPastAssessmentComponent extends  DialogComponent<PastAssessmentModel,  boolean>  implements  PastAssessmentModel {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    this.result = true;
    this.close();
  }

  ngOnInit() {
  }

}
