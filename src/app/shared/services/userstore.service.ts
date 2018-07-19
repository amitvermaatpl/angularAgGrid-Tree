import { Injectable } from '@angular/core';

@Injectable()
export class UserstoreService {
  private userGroup: string;
  private username: string;

  constructor() { }
  setUserGroup(userGroup) {
    this.userGroup = userGroup;
  }

  getUserGroup() {
    return this.userGroup;
  }

  setUserName(username) {
    this.username = username;
  }

  getUserName() {
    return this.username;
  }

}
