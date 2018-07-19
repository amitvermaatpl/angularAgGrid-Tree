import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assessment-report',
  templateUrl: './assessment-report.component.html',
  styleUrls: ['./assessment-report.component.css']
})
export class AssessmentReportComponent implements OnInit {

  reports: Boolean = true;
  linkactive: String = 'assessmentreport';

  constructor(private http: HttpClient) { }

  columnDefs = [
    {headerName: '', checkboxSelection: true, headerCheckboxSelection: true, suppressFilter: true, width: 60, suppressMenu: true },
    {headerName: 'Assessment Id', field: 'assessmentid', width: 130, filter: 'agTextColumnFilter'},
    {headerName: 'Request / Run Date', field: 'requestdate', width: 160, filter: 'agTextColumnFilter'},
    {headerName: 'Execution', field: 'execution', width: 160, filter: 'agTextColumnFilter'},
    {headerName: 'Portfolio', field: 'portfolio', width: 160, filter: 'agTextColumnFilter'},
    {headerName: 'ISIN(S)', field: 'isins', width: 160, filter: 'agTextColumnFilter'},
    {headerName: 'Assessment Type', field: 'assessmenttype', width: 130, filter: 'agTextColumnFilter'},
    {headerName: 'Results', field: 'results', width: 130, filter: 'agTextColumnFilter'},
    {headerName: 'Assessment Report', field: 'assessmentreport', width: 130,
    filter: 'agTextColumnFilter', cellStyle: { 'text-align': 'center' },
      cellRenderer: function (data) {
        if (data.value === 'View Assessment') {
          return `<i data-toggle='tooltip' data-placement='right' title='Approved'
                  class='fa fa-file-text-o' style='font-size: 18px; color:#337ab7;'></i>`;
        }
      }
    },
    {headerName: 'Data', field: 'data', width: 100, filter: 'agTextColumnFilter',
      cellStyle: { 'text-align': 'center' },
      cellRenderer: function (data) {
        if (data.value === 'View Data') {
          return `<i data-toggle='tooltip' data-placement='right' title='View Data'
                  class='fa fa-database' style='font-size: 18px; color:#337ab7;'></i>`;
        }
      }
    }
  ];

  rowData: any;

  ngOnInit() {
    this.http.get('./assets/mockjson/assessments_report_data.json').subscribe( data => {
      this.rowData = data;
    });
  }

}
