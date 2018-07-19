import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-activation',
  templateUrl: './rule-activation.component.html',
  styleUrls: ['./rule-activation.component.css']
})
export class RuleActivationComponent implements OnInit {

  configurations: Boolean = true;
  linkactive: String = 'ruleactivation';
  constructor() { }

  ngOnInit() {
  }
}
