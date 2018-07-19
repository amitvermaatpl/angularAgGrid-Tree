import { Component } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    $(document).ready(function() {
      $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    });
  }
}
