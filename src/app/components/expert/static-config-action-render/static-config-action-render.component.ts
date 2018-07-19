import { Component, OnInit } from '@angular/core';
import { PermissionsCodes } from '../../../shared/constants/permission-codes';

@Component({
  selector: 'app-static-config-action-render',
  templateUrl: './static-config-action-render.component.html',
  styleUrls: ['./static-config-action-render.component.css']
})
export class StaticConfigActionRenderComponent implements OnInit {

  private params: any;
  actives = PermissionsCodes.active;
  pendingApprovals = PermissionsCodes.pendingApproval;
  pendingDeletion = PermissionsCodes.pendingDeletion;
  inactives = PermissionsCodes.Inactive;

  agInit(params: any): void {
    this.params = params;
  }
  constructor() { }

  editAllowed(params){
    if(this.actives == params){
      return true;
    }else{
      return false;
    }
  }
  deleteAllowed(params){
    if(this.actives == params){
      return true;
    }else{
      return false;
    }
  }
  approveAllowed(params){
    if(this.pendingApprovals == params || this.pendingDeletion == params){
      return true;
    }else{
      return false;
    }
  }
  rejectAllowed(params){
    if(this.pendingApprovals == params || this.pendingDeletion == params){
      return true;
    }else{
      return false;
    }
  }

  
  editAction() {
   this.params.context.componentParent.editStaticConf(this.params.node.data);
  }

  deleteAction() {
    this.params.context.componentParent.deleteStaticConf(this.params.node.data);
  }
  approveAction() {
    this.params.context.componentParent.approveStaticConf(this.params.node.data);
  }
  /*approveDeleteAction() {
    this.params.context.componentParent.approveDeleteStaticConf(this.params.node.data);
  }*/
  rejectAction() {
    this.params.context.componentParent.rejectStaticConf(this.params.node.data);
  }


 

  ngOnInit() {
  }

}
