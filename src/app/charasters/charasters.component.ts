import { Component } from '@angular/core';

@Component({
  selector: 'app-charasters',
  templateUrl: './charasters.component.html',
  styleUrls: ['./charasters.component.css'],
})
export class CharastersComponent {
  buttonTimeout = 150;
  buttonMore = 'charasters__button_more';

  public buttonMoreClick(): string {
    this.buttonMore = 'charasters__button_more_click';
    console.log('Button More is clicked!');
    setTimeout(() => {
      this.buttonMore = 'charasters__button_more';
    }, this.buttonTimeout);
    return this.buttonMore;
  }
}
