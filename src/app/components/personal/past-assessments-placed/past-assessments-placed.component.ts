import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-assessments-placed',
  templateUrl: './past-assessments-placed.component.html',
  styleUrls: ['./past-assessments-placed.component.css']
})
export class PastAssessmentsPlacedComponent implements OnInit {

  personalportfolio: Boolean = true;
  linkactive: String = 'pastassessments';

  constructor() { }

  ngOnInit() {
  }

}
