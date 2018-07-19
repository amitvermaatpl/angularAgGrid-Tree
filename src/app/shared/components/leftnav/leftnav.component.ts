import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  @Input() home: boolean;
  @Input() portfolio: boolean;
  @Input() linkactive: string;
  @Input() personalportfolio: boolean;
  @Input() userGroup:boolean;

  @Input() dashboardExpert:string;
  @Input() portfolioassessment:string;
  @Input() reports:string;
  @Input() configurations: boolean;
  @Input() ruledesign: boolean;
  @Input() usersroles: boolean;

  constructor() { }

  ngOnInit() {
  }

}
