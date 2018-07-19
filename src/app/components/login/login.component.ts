import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserstoreService } from '../../shared/services/userstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showLoginError: Boolean = false;
  userGroup: string;
  constructor(private router: Router, private userstoreService: UserstoreService) { }

  btnClick() {
    if (this.username === 'ecbledpersonal' && this.password === 'ibm123') {
      this.userGroup = "personal";
      this.userstoreService.setUserGroup(this.userGroup);
      this.userstoreService.setUserName(this.username);
      this.router.navigateByUrl('/requestassessment');
    } else if (this.username === 'ecbledexpert' && this.password === 'ibm123') {
      this.userGroup = "expert";
      this.userstoreService.setUserGroup(this.userGroup);
      this.userstoreService.setUserName(this.username);
      this.router.navigateByUrl('/Dashboard');
    } else {
      this.showLoginError = true;
    }
  };

  ngOnInit() {
  }

}