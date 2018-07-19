import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-assessment-placed',
  templateUrl: './request-assessment-placed.component.html',
  styleUrls: ['./request-assessment-placed.component.css']
})
export class RequestAssessmentPlacedComponent implements OnInit {

  personalportfolio: Boolean = true;
  linkactive: String = 'requestassessment';

  constructor() { }

  ngOnInit() {
  }

}
