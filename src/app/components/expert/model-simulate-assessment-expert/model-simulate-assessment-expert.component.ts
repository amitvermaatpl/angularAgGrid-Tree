import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface SimulateAssessmentModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-model-simulate-assessment-expert',
  templateUrl: './model-simulate-assessment-expert.component.html',
  styleUrls: ['./model-simulate-assessment-expert.component.css']
})
export class ModelSimulateAssessmentExpertComponent extends  DialogComponent<SimulateAssessmentModel,  boolean>  implements  SimulateAssessmentModel {

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
