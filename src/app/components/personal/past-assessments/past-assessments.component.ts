import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelPastAssessmentComponent } from '../model-past-assessment/model-past-assessment.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ActionRendererComponent } from '../../../shared/components/action-renderer/action-renderer.component';

@Component({
  selector: 'app-past-assessments',
  templateUrl: './past-assessments.component.html',
  styleUrls: ['./past-assessments.component.css']
})
export class PastAssessmentsComponent implements OnInit {

  personalportfolio: Boolean = true;
  linkactive: String = 'pastassessments';
  context: any;
  frameworkComponents: any;
  private columnDefs;

  constructor(private http: HttpClient, private dialogService: DialogService) {
    this.columnDefs = [
      { headerName: 'Assessment Id', field: 'assessmentid', width: 130, filter: "agTextColumnFilter" },
      { headerName: 'Request Date', field: 'requestdate', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Portfolio', field: 'portfolio', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'ISIN(S)', field: 'isins', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Assessment Type', field: 'assessmenttype', width: 130, filter: "agTextColumnFilter" },
      {
        headerName: 'Assessment Status', field: 'assessmentstatus', width: 130,
        filter: 'agTextColumnFilter', cellStyle: { 'text-align': 'center' },
        cellRenderer: function (data) {
          if (data.value === 'Completed') {
            return "<i data-toggle='tooltip' data-placement='bottom' title='Completed' class='fa fa-check-circle' style='font-size: 18px; color:#5aa700;'></i>";
          } else if (data.value === 'Pending') {
            return "<i data-toggle='tooltip' data-placement='bottom' title='Pending' class='fa fa-exclamation-triangle' style='font-size: 18px; color:#efc000;'></i>";
          }
        }

      },
      { headerName: 'Result', field: 'result', width: 100, filter: "agTextColumnFilter" },
      {
        headerName: 'Assessment Report', field: 'assessmentreport', width: 130, filter: "agTextColumnFilter", cellStyle: { 'text-align': 'center' },
        cellRenderer: 'actionRenderer'
    }
    ];

    this.context = { componentParent: this };
    this.frameworkComponents = { actionRenderer: ActionRendererComponent };
  }


  rowData: any;

  ngOnInit() {
    this.http.get('./assets/mockjson/past_assessments_data.json').subscribe(data => {
      this.rowData = data;
    });
  }

  modelPastAssessment() {
    const disposable = this.dialogService.addDialog(ModelPastAssessmentComponent, {
      title: 'Confirm title',
      message: 'Confirm message'
    })
      .subscribe((isConfirmed) => { });
  }
}
