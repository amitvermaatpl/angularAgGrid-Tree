import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelScheduleAssessmentComponent } from '../model-schedule-assessment/model-schedule-assessment.component';
import { DialogService } from "ng2-bootstrap-modal";
import { LiveAssessmentActionRenderComponent } from '../live-assessment-action-render/live-assessment-action-render.component';
import { ActionRendererComponent } from '../../../shared/components/action-renderer/action-renderer.component';
@Component({
  selector: 'app-schedule-assessments',
  templateUrl: './schedule-assessments.component.html',
  styleUrls: ['./schedule-assessments.component.css']
})
export class ScheduleAssessmentsComponent implements OnInit {

  configurations: Boolean = true;
  linkactive: String = 'scheduleassessments';
  private columnDefs;
  context: any;
  frameworkComponents: any;

  constructor(private http: HttpClient,private dialogService:DialogService) { 
    this.columnDefs = [
      {headerName: 'Schedule Id', field: 'assessmentid', width: 130, filter: "agTextColumnFilter"},
      {headerName: 'Portfolio', field: 'portfolio', width: 160, filter: "agTextColumnFilter"},
      {headerName: 'ISIN(S)', field:'isins', width: 160, filter: "agTextColumnFilter"},
      {headerName: 'Assessment Type', field:'assessmenttype', width: 130, filter: "agTextColumnFilter"},
      {headerName: 'Frequency', field: 'frequency', width: 160, filter: "agTextColumnFilter"},
      {headerName: 'Valid From', field: 'validfrom', width: 160, filter: "agTextColumnFilter"},
      {headerName: 'Valid To', field:'validto', width: 130, filter: "agTextColumnFilter"},
      {headerName: 'Next Run', field:'nextrun', width: 100, filter: "agTextColumnFilter"},
      {
        headerName: 'Stop Schedule', width: 100, field: 'stopschedule', suppressFilter: true, suppressSorting: true, menuTabs: [],
        cellStyle: { 'overflow': 'visible !important', 'text-align': 'center' }, cellRenderer: 'actionRenderer',
      }
    ];
    this.context = { componentParent: this };
    this.frameworkComponents = { actionRenderer: ActionRendererComponent  };  
  }


  rowData:any;

  modelScheduleAssessment(){
    console.log("Hi");
    let disposable = this.dialogService.addDialog(ModelScheduleAssessmentComponent, {
      title:'Confirm title', 
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{});
  }

  ngOnInit() {
    this.http.get('./assets/mockjson/schedule_assessments_data.json').subscribe( data => {
      this.rowData = data;
    });
  }

}
