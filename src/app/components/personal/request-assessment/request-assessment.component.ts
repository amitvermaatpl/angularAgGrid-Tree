import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { Router } from '@angular/router';
import { TreeviewI18n, TreeviewItem, TreeviewConfig, DropdownTreeviewComponent, TreeviewHelper } from 'ngx-treeview';
import { PortfolioTreeService } from '../../../shared/services/portfolio-tree.service';

@Component({
  selector: 'app-request-assessment',
  templateUrl: './request-assessment.component.html',
  styleUrls: ['./request-assessment.component.css']
})
export class RequestAssessmentComponent implements OnInit {
  myOptions: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    showTodayBtn: false,
    todayBtnTxt: new Date().toString(),
    showSelectorArrow: false,
    dayLabels: { su: 'S', mo: 'M', tu: 'T', we: 'W', th: 'Th', fr: 'F', sa: 'S' }
  };
  items: TreeviewItem[];
  config = TreeviewConfig.create({
    hasFilter: false,
    hasCollapseExpand: true,

  });


  personalportfolio: Boolean = true;
  linkactive: String = 'requestassessment';

  constructor(private router: Router, private portfolioTreeService: PortfolioTreeService) { }

  requestAssessmentPlaced = function () {
    console.log(`Clicked on marker`);
    this.router.navigateByUrl('/requestassessmentplaced');
  };

  onDateChanged(event: IMyDateModel): void {
    console.log(event);
  }

  ngOnInit() {
    this.items = this.portfolioTreeService.getDataForReqAssessment();

  }
}
