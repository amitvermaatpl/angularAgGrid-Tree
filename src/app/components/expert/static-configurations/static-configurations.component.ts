import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService } from "ng2-bootstrap-modal";
import { StaticConfigActionRenderComponent } from './../static-config-action-render/static-config-action-render.component';
import { EditStaticConfigurationsComponent } from './../edit-static-configurations/edit-static-configurations.component';
import { AddStaticConfigurationsComponent } from './../add-static-configurations/add-static-configurations.component';
import { ApproveStaticConfigurationsComponent } from './../approve-static-configurations/approve-static-configurations.component';
import { StaticConfigurationService } from '../../../shared/services/staticconfiguration.service';
import { RejectStaticConfigurationComponent } from '../reject-static-configuration/reject-static-configuration.component';
import { ConfirmationDialogsComponent } from '../confirmation-dialogs/confirmation-dialogs.component';


@Component({
  selector: 'app-static-configurations',
  templateUrl: './static-configurations.component.html',
  styleUrls: ['./static-configurations.component.css']
})
export class StaticConfigurationsComponent implements OnInit {

  configurations: Boolean = true;
  linkactive: String = 'staticconfig';
  context: any;
  frameworkComponents: any;
  private columnDefs;
  private gridApi;
  private gridColumnApi;
  recordsCount: any;
  constructor(private http: HttpClient, private dialogService: DialogService, private staticConfService:StaticConfigurationService) {
    this.columnDefs = [
      { headerName: 'Rating', field: 'ratingKey.rating', width: 200, filter: "agTextColumnFilter" },
      { headerName: 'Percentage', field: 'percentage', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Valid From', field: 'validFrom', width: 275, filter: "agTextColumnFilter" },
      { headerName: 'Valid To', field: 'validTo', width: 275, filter: "agTextColumnFilter" },
      {
        headerName: 'Status', field: 'status',  width: 75,
        filter: 'agTextColumnFilter', cellStyle: { 'text-align': 'center' },
        cellRenderer: function (data) {
          if (data.value === 'APPROVED') {
            return "<i data-toggle='tooltip' data-placement='top' title='Approved' class='fa fa-check-circle' style='font-size: 18px; color:#00b300;'></i>";
          } else if (data.value === 'PENDING_APPROVAL') {
            return "<i data-toggle='tooltip' data-placement='top' title='Pending Aproval for Edit: % change from % to % ' class='fa fa-exclamation-triangle' style='font-size: 18px; color:#F1C40F'></i>";
          }else if (data.value === 'PENDING_DELETION') {
            return "<i data-toggle='tooltip' data-placement='top' title='Pending Aproval for Deletion' class='fa fa-exclamation-triangle' style='font-size: 18px; color:#E60415;'></i>";
          }else if (data.value  === 'REJECTED') {
            return "<i data-toggle='tooltip' data-placement='top' title='Rejected' class='fa fa-times-circle' style='font-size: 18px; color:#E61204;'></i>";
          }else if (data.value  === 'INACTIVE') {
            return "<i data-toggle='tooltip' data-placement='top' title='Iactive' class='fa fa-check-circle' style='font-size: 18px; color:#a6a6a6;'></i>";
          }
        }
      },
      
      {
        headerName: 'Action', width: 160, field: 'actionsid', suppressFilter: true, suppressSorting: true, menuTabs: [],
        cellStyle: { 'overflow': 'visible !important', 'text-align': 'center' }, 
        cellRenderer: 'actionRenderer' 
      }
    ];
    var tooltipRenderer = function(params)
    {
        return '<span title="' + params.value + '">'+params.value+'</span>';
    };

    this.context = { componentParent: this };
    this.frameworkComponents = { actionRenderer: StaticConfigActionRenderComponent };
  }


  

  serverSideError;
  rowData: any;
  protected result: any;

  actionAllowed(){

  }

  addStaticConf() {
    let disposable = this.dialogService.addDialog(AddStaticConfigurationsComponent, {
      
    }).subscribe((isConfirmed)=>{
      this.ngOnInit();
      //success => this.handleSubmitSuccess(success)
    });
  }
  editStaticConf(selectedRow) {
    const editStaticConfRequest = JSON.stringify({
    id: selectedRow.id,
    rating: selectedRow.ratingKey.rating,
    percentage: selectedRow.percentage,
    validFrom: selectedRow.validFrom,
    validTo: selectedRow.validTo,
    status: selectedRow.status
    });
    selectedRow = editStaticConfRequest;
    console.log("selectedRow.rating..",JSON.parse(selectedRow.toString()).rating);
    let disposable = this.dialogService.addDialog(EditStaticConfigurationsComponent, {selectedRow: selectedRow
    }).subscribe((isConfirmed)=>{
      this.ngOnInit();
       //success => this.handleSubmitSuccess(success)
    });
  }
  deleteStaticConf(selectedRow) {
    const popMsgDetails = JSON.stringify({
      title:  'Delete',
      message: 'Are you sure want to delete Rate  :-        '+selectedRow.ratingKey.rating+' ?',
      id: selectedRow.id
    });
    console.log("popMsgDetails..",popMsgDetails);
    selectedRow = popMsgDetails;
    let disposable = this.dialogService.addDialog(ConfirmationDialogsComponent, 
    {selectedRow: selectedRow}).subscribe((isConfirmed)=>{
      if(JSON.parse(isConfirmed.toString()).result == 'yes'){
        this.staticConfService.deleteRating(JSON.parse(selectedRow.toString()).id).subscribe((isConfirmed)=>{
          this.ngOnInit();
           //success => this.handleSubmitSuccess(success)
        });
      }
    });
  }
  approveStaticConf(selectedRow) {
    if(selectedRow.status === 'PENDING_APPROVAL'){
      this.staticConfService.approveRating(selectedRow.id).subscribe((isConfirmed)=>{
        this.ngOnInit();
         //success => this.handleSubmitSuccess(success)
      });
    }else if(selectedRow.status === 'PENDING_DELETION'){
      this.staticConfService.approveDelete(selectedRow.id).subscribe((isConfirmed)=>{
        this.ngOnInit();
         //success => this.handleSubmitSuccess(success)
      });
    }
   
  }
  rejectStaticConf(selectedRow) {
    this.staticConfService.rejectRating(selectedRow.id).subscribe((isConfirmed)=>{
      this.ngOnInit();
       //success => this.handleSubmitSuccess(success)
    });
  }
  ngOnInit() {
    /*this.http.get('./assets/mockjson/static_configuration_data.json').subscribe(data => {
      this.rowData = data;
    });*/
    this.staticConfService.fetchAll().subscribe(
      data => {
        this.rowData = data;
        this.recordsCount =  this.rowData.length;
       // this.gridApi.hideOverlay();
      }
    );
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //this.gridApi.hideOverlay();
    /*this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
      .subscribe(data => {
        this.rowData = data;
      });*/
  }
  onBtExport() {
    var params = {
      fileName: 'led_StaticConfiguration.csv',
    } 
    this.gridApi.exportDataAsCsv(params);

  }
  private createJsonResp(data) {
    const jsonstring = JSON.stringify({
      result: 'success',
      id: data.id
    });
    return jsonstring;
  }
  protected handleSubmitSuccess(data: any) {
    if (data.errorList != null && data.errorList.length > 0) {
      this.serverSideError = data.errorList;
    } else {
      this.result = this.createJsonResp(data);
      this.ngOnInit();
    }
  }

}
