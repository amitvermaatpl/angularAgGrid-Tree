import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { ModelSimulateAssessmentExpertComponent } from '../model-simulate-assessment-expert/model-simulate-assessment-expert.component';
import { DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: 'app-simulate-assessment-expert',
  templateUrl: './simulate-assessment-expert.component.html',
  styleUrls: ['./simulate-assessment-expert.component.css']
})
export class SimulateAssessmentExpertComponent implements OnInit {

  portfolioassessment: Boolean = true;
  linkactive: String = 'Simulateassessment';

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
    let disposable = this.dialogService.addDialog(ModelSimulateAssessmentExpertComponent, {
      title:'Confirm title', 
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{});
  }

  ngOnInit() {
  }

}
