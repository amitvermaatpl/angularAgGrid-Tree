import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface PastSimulationModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-model-past-simulation',
  templateUrl: './model-past-simulation.component.html',
  styleUrls: ['./model-past-simulation.component.css']
})
export class ModelPastSimulationComponent extends DialogComponent<PastSimulationModel, boolean> implements PastSimulationModel {
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
