import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-assessment-action-render',
  templateUrl: './live-assessment-action-render.component.html',
  styleUrls: ['./live-assessment-action-render.component.css']
})
export class LiveAssessmentActionRenderComponent implements OnInit {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }
  constructor() { }
  invokePerformAssessmentMethod() {
    this.params.context.componentParent.methodFromPerformAssessment();
  }

  ngOnInit() {
  }

}
