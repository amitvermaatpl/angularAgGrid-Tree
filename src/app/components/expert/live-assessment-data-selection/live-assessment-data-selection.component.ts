import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/primeng';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-live-assessment-data-selection',
  templateUrl: './live-assessment-data-selection.component.html',
  styleUrls: ['./live-assessment-data-selection.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LiveAssessmentDataSelectionComponent implements OnInit {

  portfolioassessment: Boolean = true;
  linkactive: String = 'liveassessment';

  constructor() { }

    items: MenuItem[];
    msgs: Message[] = [];

    activeIndex: number = 0;

    isDataSelection: boolean = true;
    isUpdateMarketData: boolean = false;
    isValidateData: boolean = false;
    isEnrichData: boolean = false;
    isExecuteRule: boolean = false;
    isAssessmentResults: boolean = false;
    isSendEmail: boolean = false;
    sendMailBtn: boolean = true;
    enrichDataSaveBtnclicked: boolean = false;

    ActiveUpdateMarketData() {
        this.activeIndex = 1;

        this.isDataSelection = false;
        this.isUpdateMarketData = true;
        this.isValidateData = false;
        this.isEnrichData = false;
        this.isExecuteRule = false;
        this.isAssessmentResults = false;
        this.isSendEmail = false;
    }
    ActiveValidateData() {
        this.activeIndex = 2;

        this.isDataSelection = false;
        this.isUpdateMarketData = false;
        this.isValidateData = true;
        this.isEnrichData = false;
        this.isExecuteRule = false;
        this.isAssessmentResults = false;
        this.isSendEmail = false;
    }
    ActiveEnrichData() {
        this.activeIndex = 3;

        this.isDataSelection = false;
        this.isUpdateMarketData = false;
        this.isValidateData = false;
        this.isEnrichData = true;
        this.isExecuteRule = false;
        this.isAssessmentResults = false;
        this.isSendEmail = false;
    }
    enrichDataSaveBtnclick() {
        console.log(this.enrichDataSaveBtnclicked);
        this.enrichDataSaveBtnclicked = true;
        console.log(this.enrichDataSaveBtnclicked);
    }
    ActiveExecuteRule() {
        this.activeIndex = 4;

        this.isDataSelection = false;
        this.isUpdateMarketData = false;
        this.isValidateData = false;
        this.isEnrichData = false;
        this.isExecuteRule = true;
        this.isAssessmentResults = false;
        this.isSendEmail = false;
    }
    ActiveAssessmentResults() {
        this.activeIndex = 5;

        this.isDataSelection = false;
        this.isUpdateMarketData = false;
        this.isValidateData = false;
        this.isEnrichData = false;
        this.isExecuteRule = false;
        this.isAssessmentResults = true;
        this.isSendEmail = false;
    }
    ActiveSendEmail() {
        this.activeIndex = 6;

        this.isDataSelection = false;
        this.isUpdateMarketData = false;
        this.isValidateData = false;
        this.isEnrichData = false;
        this.isExecuteRule = false;
        this.isAssessmentResults = false;
        this.isSendEmail = true;
    }
    SendEmail() {
        console.log(this.sendMailBtn);
        this.sendMailBtn = false;
        console.log(this.sendMailBtn);
    }

    ngOnInit() {
        this.items = [{
                label: 'Data selection by LED Rules',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Update Market data',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Validate data',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Enrich Data',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Execute Rule',
                command: (event: any) => {
                    this.activeIndex = 4;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Assessment results',
                command: (event: any) => {
                    this.activeIndex = 5;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Last Step', detail: event.item.label});
                }
            },
            {
                label: 'Send Report via email',
                command: (event: any) => {
                    this.activeIndex = 6;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Last Step', detail: event.item.label});
                }
            }
        ];
    }

}
