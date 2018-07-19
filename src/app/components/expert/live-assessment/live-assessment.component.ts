import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LiveAssessmentActionRenderComponent } from './../live-assessment-action-render/live-assessment-action-render.component';
import { TreeviewI18n, TreeviewItem, TreeviewConfig, DropdownTreeviewComponent, TreeviewHelper } from 'ngx-treeview';
import { PortfolioTreeService } from '../../../shared/services/portfolio-tree.service';

@Component({
  selector: 'app-live-assessment',
  templateUrl: './live-assessment.component.html',
  styleUrls: ['./live-assessment.component.css']
})
export class LiveAssessmentComponent implements OnInit {

  portfolioassessment: Boolean = true;
  linkactive: String = 'liveassessment';
  items: TreeviewItem[];
  config = TreeviewConfig.create({
    hasFilter: false,
    hasCollapseExpand: true,

  });

  context: any;
  frameworkComponents: any;
  private columnDefs;
  rowData: any;

  constructor(private http: HttpClient, private portfolioTreeService: PortfolioTreeService) {
    this.columnDefs = [
      {headerName: 'Assessment Id', field: 'assessmentid', width: 130, filter: 'agTextColumnFilter'},
      {headerName: 'Request Date', field: 'requestdate', width: 160, filter: 'agTextColumnFilter'},
      {headerName: 'Portfolio', field: 'portfolio', width: 160, filter: 'agTextColumnFilter'},
      {headerName: 'Requester', field: 'requester', width: 160, filter: 'agTextColumnFilter'},
      {headerName: 'ISIN(S)', field: 'isins', width: 160, filter: 'agTextColumnFilter'},
      {headerName: 'Assessment Type', field: 'assessmenttype', width: 130, filter: 'agTextColumnFilter'},
      {headerName: 'Status', field: 'assessmentstatus', width: 130, filter: 'agTextColumnFilter'},
      {
        headerName: 'Action', width: 100, field: 'action', suppressFilter: true, suppressSorting: true, menuTabs: [],
        cellStyle: { 'overflow': 'visible !important', 'text-align': 'center' }, cellRenderer: 'actionRenderer',
      }
    ];
    this.context = { componentParent: this };
    this.frameworkComponents = { actionRenderer: LiveAssessmentActionRenderComponent  };
   }

  methodFromPerformAssessment() {
  }

  ngOnInit() {
    this.items = this.portfolioTreeService.getPendingLiveReq();

    this.http.get('./assets/mockjson/live_assessments_data.json').subscribe( data => {
      this.rowData = data;
    });
  }

}
