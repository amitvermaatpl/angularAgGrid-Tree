import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-expert',
  templateUrl: './dashboard-expert.component.html',
  styleUrls: ['./dashboard-expert.component.css']
})
export class DashboardExpertComponent implements OnInit {

  dashboardExpert: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
