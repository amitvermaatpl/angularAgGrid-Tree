import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
export interface SimulateAssessmentModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-model-schedule-assessment',
  templateUrl: './model-schedule-assessment.component.html',
  styleUrls: ['./model-schedule-assessment.component.css']
})
export class ModelScheduleAssessmentComponent extends DialogComponent<SimulateAssessmentModel, boolean> implements SimulateAssessmentModel {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  myOptions: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    showTodayBtn: false,
    todayBtnTxt: new Date().toString(),
    showSelectorArrow: false,
    dayLabels: {su: 'S', mo: 'M', tu: 'T', we: 'W', th: 'Th', fr: 'F', sa: 'S'}
  };

  onDateChanged(event: IMyDateModel): void {
    console.log(event);
  }


  confirm() {
    this.result = true;
    this.close();
  }
}
