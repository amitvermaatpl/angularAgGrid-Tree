import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-design-action-render',
  templateUrl: './rule-design-action-render.component.html',
  styleUrls: ['./rule-design-action-render.component.css']
})
export class RuleDesignActionRenderComponent implements OnInit {

  private params: any;
  private rulesSelected: any;
  selectedRow: any;
  message: string;
  ruleContent: any;
  stepId: string;
  activeid: string;
  resultid: string;
  ruleSetId: string;
  serverSideError;
  ruleId: string;

  agInit(params: any): void {
    this.params = params;
  }
  constructor() { }
  
  ngOnInit() {
   // const myObj = JSON.parse(this.selectedRow);
   // console.log("ngOnInit......",myObj.contentid);
    /*this.ruleSetId = myObj.ruleSetId;
    this.ruleContent = myObj.contentid;
    this.stepId = myObj.stepid;
    this.activeid = myObj.activeid;
    this.resultid = myObj.resultid;*/
    //this.ruleId = myObj.ruleId;
  }
  editAction() {
    this.params.context.componentParent.editRuleStep(this.params.node.data);
  }

  deleteAction() {
    this.params.context.componentParent.deleteRuleStep(this.params.node.data);
  }

  executeAction() {
    this.params.context.componentParent.executeRuleStep(this.params.node.data);
  }
}
