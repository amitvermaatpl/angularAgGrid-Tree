import { Component, OnInit, Input } from '@angular/core';
import { UserstoreService } from '../../services/userstore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userGroup: string;
  username: string;
  @Input() home: boolean;
  @Input() portfolio: boolean;
  @Input() personalportfolio: boolean;
 // @Input() userGroup: string;

  @Input() dashboardExpert: string;
  @Input() portfolioassessment: string;
  @Input() reports: string;
  @Input() configurations: boolean;
  @Input() usersroles: boolean;
  constructor(private userstoreService: UserstoreService) { }

  ngOnInit() {
    //debugger;
    if(this.userstoreService.getUserGroup() != null && this.userstoreService.getUserGroup().trim().length != 0){
      this.userGroup = this.userstoreService.getUserGroup();
    }
    if(this.userstoreService.getUserName() != null && this.userstoreService.getUserName().trim().length != 0){
      this.username = this.userstoreService.getUserName();
    }
  }
}
