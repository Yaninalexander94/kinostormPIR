import { Component } from '@angular/core';

@Component({
  selector: 'app-charasters',
  templateUrl: './charasters.component.html',
  styleUrls: ['./charasters.component.css'],
})
export class CharastersComponent {
  buttonTimeout: number = 150;
  buttonMoreClass: string = 'button_more';

  public buttonMoreClick(): string {
    this.buttonMoreClass = 'button_more_click';
    console.log('Button More is clicked!');
    setTimeout(() => {
      this.buttonMoreClass = 'button_more';
    }, this.buttonTimeout);
    return this.buttonMoreClass;
  }
}
