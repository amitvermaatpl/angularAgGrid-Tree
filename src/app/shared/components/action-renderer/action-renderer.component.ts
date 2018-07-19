import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-renderer',
  templateUrl: './action-renderer.component.html',
  styleUrls: ['./action-renderer.component.css']
})
export class ActionRendererComponent implements OnInit {
  private params: any;

  agInit(params: any): void {
   this.params = params;
  }

  constructor() { }
  invokePastAssestmentMethod() {
    this.params.context.componentParent.modelPastAssessment();
  }

  invokePastSimulationMethod() {
    this.params.context.componentParent.modelPastSimulation();
  }

  ngOnInit() {
  }

}
