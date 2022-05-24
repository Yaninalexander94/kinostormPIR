import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userList: boolean = false;
  mainHTML: boolean = true;

  openUserList() {
    this.userList = true;
    this.mainHTML = false;
  }

  openMainHTML(){
    this.userList = false;
    this.mainHTML = true;
  }
}
