import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService } from 'ng2-bootstrap-modal';
import { RuleDesignActionRenderComponent } from './../rule-design-action-render/rule-design-action-render.component';
import { EditRuleStepComponent } from './../edit-rule-step/edit-rule-step.component';
import { AddRuleSetComponent } from './../add-rule-set/add-rule-set.component';
import { RuledesignService } from '../../../shared/services/ruledesign.service';
import { RuleStepService } from '../../../shared/services/rulestep.service';
import { GridOptions, GridApi } from 'ag-grid';
import { ConfirmDialog } from 'primeng/primeng';
import { ConfirmationDialogsComponent } from '../confirmation-dialogs/confirmation-dialogs.component';


@Component({
  selector: 'app-rule-design',
  templateUrl: './rule-design.component.html',
  styleUrls: ['./rule-design.component.css']
})
export class RuleDesignComponent implements OnInit {
  gridOptions: GridOptions;
  private gridStyle;
  private gridApi: GridApi;
  private gridColumnApi;
  isButtonDisable: Boolean = true;
  configurations: Boolean = true;
  linkactive: String = 'ruledesign';
  context: any;
  serverSideError;
  frameworkComponents: any;
  private columnDefs;
  protected result: any;
  recordSize: any;
  rowData: any;
  tempData: any;
  ruleResult: any;
  rules: any[] = [];
  newRuleSet: any[] = [];
  rulesSelected: any;
  modeSelected: string;
  ruleSetId: any;
  modes = ['Testing'];
  mode: string;
  description: string;
  ruleSet: any;
  isRulesAvailable: boolean = false;
  private overlayLoadingTemplate;
  private overlayNoRowsTemplate;
  private noRowsOverlayComponent;
  private loadingOverlayComponentParams;
  constructor(private http: HttpClient, private dialogService: DialogService,
  private ruleDesignService: RuledesignService, private ruleStepService: RuleStepService) {
    this.gridOptions = <GridOptions>{context: {parentComponent: this}};
    this.columnDefs = [
      { headerName: 'Step', field: 'ruleStep', width: 80, filter: 'agTextColumnFilter'},
      { headerName: 'Content', field: 'ruleContent', width: 475, filter: 'agTextColumnFilter', 
        cellClass: "cell-wrap-text", autoHeight: true },
      {
        headerName: 'Active', field: 'activeStatus', width: 100,
        filter: 'agTextColumnFilter', cellStyle: { 'text-align': 'center' },
        cellRenderer: function (data) {
          if (data.value === 'Y') {
            return "<i class='fa fa-toggle-on' style='font-size: 24px; color:#003299;'></i>";
          } else if (data.value === 'N') {
            return "<i class='fa fa-toggle-off' style='font-size: 24px; color:#ccc;'></i>";
          }
        }, autoHeight: true

      },
      { headerName: 'Result', field: 'result', width: 475, filter: 'agTextColumnFilter', 
        cellClass: "cell-wrap-text", autoHeight: true },
      {
        headerName: 'Action', width: 75, field: 'actionsid', suppressFilter: true, suppressSorting: true, menuTabs: [],
        cellStyle: { 'overflow': 'visible !important', 'text-align': 'center' }, cellRenderer: 'actionRenderer'}
    ];
    this.context = { componentParent: this };
    this.frameworkComponents = { actionRenderer: RuleDesignActionRenderComponent };
    this.overlayNoRowsTemplate ='<span class="ag-overlay-loading-center">No rows to show...</span>';
    this.overlayLoadingTemplate = '<i style=color:#003299 class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>';
    /*this.gridOptions = {
      enableSorting: true,
      rowData: this.rowData,
      columnDefs: this.columnDefs
    }*/
  }
  onRulesSelected(event) {
   if(event.id){
    this.isButtonDisable = false;
    this.rulesSelected = event;
    console.log(this.rulesSelected.id);
    this.ruleSetId = this.rulesSelected.id;
    this.ruleDesignService.fetchRuleSetByRuleSetId(this.rulesSelected.id).subscribe(data => {
      if(data){
        this.description = data.rulesetDesc;
        this.modeSelected = data.rulesetMode;
      }
    });
    this.ruleDesignService.fetchRuleByRuleSetId(this.rulesSelected.id).subscribe(data => {
      this.rowData = data;
      this.recordSize = this.rowData.length;
    });
    this.rulesSelected = this.rulesSelected.name;
   }else{
    this.rulesSelected = event;
   }
    
    /*const ind = this.rules.indexOf(event);
    this.rules.splice(ind,1);
    this.ngOnInit();*/
  }
  createRowData(data) {
    if(data){
      const rowDataTemp = [];
      for (var i = 0; i < this.rowData.length; i++) {
        var finalResult = "";
        if(data.id == this.rowData[i].id){
          finalResult = data.result;
        }
        var item = {
          id: this.rowData[i].id,
          ruleStep: this.rowData[i].ruleStep,
          ruleContent: this.rowData[i].ruleContent,
          activeStatus: this.rowData[i].activeStatus,
          result: finalResult
        };
        console.log("item.result: ",item.result);
        rowDataTemp.push(item);
      }
      return  this.rowData = rowDataTemp;
    }
  }
  addruleset() {
    const disposable = this.dialogService.addDialog(AddRuleSetComponent, {
    }).subscribe((addRuleSetResult) => {
      if(addRuleSetResult){
       this.rulesSelected = JSON.parse(addRuleSetResult.toString()).name;
        this.ruleSetId = JSON.parse(addRuleSetResult.toString()).id;
        this.description = JSON.parse(addRuleSetResult.toString()).description;
        this.modeSelected = JSON.parse(addRuleSetResult.toString()).mode;
        this.isButtonDisable = false;
        this.rowData = [];
        this.ngOnInit();
      }
    });
  }
  trim(str){
    return String(str).trim();
  }
  ngOnInit() {
    this.ruleDesignService.fetchAllRuleSet().subscribe(
      data => {
        this.rules = [];
        for (let i = 0; i < data.length; i++) {
          const datares = data[i];
          if (datares.name != null) {
            this.rules.push({name: datares.name, id: datares.id});
            console.log('name:' , datares.name );
          }
        }
      }
    );
  }
  fetchRuleByRuleSetId(){
    //debugger;
    if(this.rulesSelected != null){
      this.ruleDesignService.fetchRuleByRuleSetId(this.ruleSetId).subscribe(data => {
        this.rowData = data;
        this.recordSize = this.rowData.length;
      });
    }
   }
  executeRuleSet() {
     this.ruleDesignService.executeRuleSet(this.ruleSetId).subscribe(
      success => {
        console.log('Respose data: ' + JSON.stringify(success));
        console.log('Respose data: ' + success.length);
        console.log('success.responseData: ',success)
        this.rowData = success;
        //success => this.handleSubmitSuccess(success),
        //error => this.handleSubmitError(error)
      },
      error => {
        console.log('error from response');
        console.log('error message: ',error.ExceptionMessage);
      }
    );
  }
  deleteRuleSet(selectedRow) {
    //debugger;
    const popMsgDetails = JSON.stringify({
      title:  'Delete Rule Set',
      message: 'Are you sure want to delete rule set  :-        '+this.rulesSelected+' ?'
    });
    console.log("popMsgDetails..",popMsgDetails);
    selectedRow = popMsgDetails;
    let disposable = this.dialogService.addDialog(ConfirmationDialogsComponent, 
    {selectedRow: selectedRow}).subscribe((isConfirmed)=>{
      if(JSON.parse(isConfirmed.toString()).result == 'yes'){
        this.ruleDesignService.deleteRuleSet(this.ruleSetId).subscribe(
          success => this.handleDeleteSubmitSuccess(success)
        );
        this.fetchRuleByRuleSetId();  
        this.isButtonDisable = true;
        this.rulesSelected = "";
      }
    });
  }
  addRuleStep() {
    this.ruleStepService.createRule(this.ruleSetId).subscribe(
      success => this.handleSubmitSuccess(success)
      //error => this.handleSubmitError(error)
    );
  }
  editRuleStep(selectedRow) {
    const editRuleSetRequest = JSON.stringify({
      ruleSetId:  this.ruleSetId,
      ruleId: selectedRow.id,
      stepid: selectedRow.ruleStep,
      contentid: selectedRow.ruleContent,
      activeid: selectedRow.activeStatus,
      resultid: selectedRow.ruleSet
    });
    console.log("editrulestep..",selectedRow.id);
    selectedRow = editRuleSetRequest;
   //this.ruleSetId = this.rulesSelected.id;
    let disposable = this.dialogService.addDialog(EditRuleStepComponent, 
    {selectedRow: selectedRow}).subscribe((isConfirmed)=>{
      //debugger;
      this.fetchRuleByRuleSetId();
      this.ngOnInit();
    });
    //debugger;
  }
  deleteRuleStep(selectedRow) {
    //debugger;
    const popMsgDetails = JSON.stringify({
      title:  'Delete Rule',
      message: 'Are you sure want to delete rule  :-        '+selectedRow.ruleStep+' ?',
      id: selectedRow.id,
      ruleStep: selectedRow.ruleStep
    });
    console.log("popMsgDetails..",popMsgDetails);
    selectedRow = popMsgDetails;
    let disposable = this.dialogService.addDialog(ConfirmationDialogsComponent, 
    {selectedRow: selectedRow}).subscribe((isConfirmed)=>{
      //debugger;
      if(JSON.parse(isConfirmed.toString()).result == 'yes'){
        this.ruleStepService.deleteRule(JSON.parse(selectedRow.toString()).id ).subscribe(
          success => this.handleSubmitSuccess(success)
          //error => this.handleSubmitError(error)
        );
        console.log("deleteRuleStep..",selectedRow.ruleStep);
      }
    });
  }

  executeRuleStep(selectedRow) {
    this.ruleStepService.executeRule(selectedRow.id).subscribe(data =>{
      this.createRowData(data);
      //success => this.handleSubmitSuccess(success),
      //error => this.handleSubmitError(error)
    });
  }

  putResultIntoRowData1(data){
    for (var i = 0; i < this.rowData.length; i++) {
      if(data.id == this.rowData[i].id){
        this.rowData[i].result = data.result;
      }
    } 
    //this.createRowData();
  }

  protected handleExecuteSubmitSuccess(data: any) {
    if (data.errorList != null && data.errorList.length > 0) {
      this.serverSideError = data.errorList;
    } else {
      this.result = this.createJsonResp(data);
      //this.putResultIntoRowData(data);
    }
   }

  protected handleDeleteSubmitError1(error: any) {
    console.log('handleSubmitError', error);
    if (error.errorList != null && error.errorList.length > 0) {
      this.serverSideError = error.errorList;
    } else {
      this.result = this.createJsonResp(error);
    }
  }
  protected handleDeleteSubmitSuccess(data: any) {
    this.result = this.createJsonResp(data);
    this.ngOnInit();
    this.fetchRuleByRuleSetId();
    this.description = ' ';
    this.modeSelected = ' ';
   }

  protected handleSubmitError1(error: any) {
    console.log('handleSubmitError', error);
    if (error.errorList != null && error.errorList.length > 0) {
      this.serverSideError = error.errorList;
    } else {
      this.result = this.createJsonResp(error);
    }
  }
  protected handleSubmitSuccess(data: any) {
    //debugger;
    if (data.errorList != null && data.errorList.length > 0) {
      this.serverSideError = data.errorList;
    } else {
      this.result = this.createJsonResp(data);
      //this.ngOnInit();
      this.fetchRuleByRuleSetId();
    }
  }
  private createJsonResp(data) {
    const jsonstring = JSON.stringify({
      result: 'success',
      id: data.id
    });
    return jsonstring;
  }
}
