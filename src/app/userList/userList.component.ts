import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css', '../banner/banner.component.css'],
})
export class UserListComponent {
  public modalOpen = false;

  public modalOpenToggle() {
    this.modalOpen = !this.modalOpen;
  }
}
