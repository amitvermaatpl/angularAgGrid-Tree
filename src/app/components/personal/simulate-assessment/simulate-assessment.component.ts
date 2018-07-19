import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { ModelSimulateAssessmentComponent } from '../model-simulate-assessment/model-simulate-assessment.component';
import { DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: 'app-simulate-assessment',
  templateUrl: './simulate-assessment.component.html',
  styleUrls: ['./simulate-assessment.component.css']
})
export class SimulateAssessmentComponent implements OnInit {

  personalportfolio: Boolean = true;
  linkactive: String = 'simulateassessment';

  constructor(private dialogService:DialogService) { }

  myOptions: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    showTodayBtn:false,
    todayBtnTxt:new Date().toString(),
    showSelectorArrow: false,
    dayLabels:{su: 'S', mo: 'M', tu: 'T', we: 'W', th: 'Th', fr: 'F', sa: 'S'}
  };
  onDateChanged(event: IMyDateModel): void {
    console.log(event);
  }
  modelSimulateAssessment(){
    let disposable = this.dialogService.addDialog(ModelSimulateAssessmentComponent, {
      title:'Confirm title', 
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{});
  }
  ngOnInit() {
  }

}
