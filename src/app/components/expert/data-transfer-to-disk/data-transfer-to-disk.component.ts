import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-data-transfer-to-disk',
  templateUrl: './data-transfer-to-disk.component.html',
  styleUrls: ['./data-transfer-to-disk.component.css']
})
export class DataTransferToDiskComponent implements OnInit {

  reports: Boolean = true;
  linkactive: String = 'datatransfertodisk';

  constructor() { }
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

  ngOnInit() {}

}
