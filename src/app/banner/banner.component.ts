import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  buttonTimeout = 150;
  buttonFavorites = 'banner__button_favorites_off';
  toggleFavorites = false;

  public buttonFavoritesToggle(): string {
    this.toggleFavorites = !this.toggleFavorites;
    if (this.toggleFavorites) {
      console.log('Button Favorites ON!');
      return this.buttonFavorites = 'banner__button_favorites_on';
    } else {
      console.log('Button Favorites OFF!');
      return this.buttonFavorites = 'banner__button_favorites_off';
    }
  }

  buttonView = 'banner__button_view_off';
  toggleView = false;

  public buttonViewToggle(): string {
    this.toggleView = !this.toggleView;
    if (this.toggleView) {
      console.log('Button View ON!');
      return this.buttonView = 'banner__button_view_on';
    } else {
      console.log('Button View OFF!');
      return this.buttonView = 'banner__button_view_off';
    }
  }

  buttonRate = 'banner__button_rate';

  public buttonRateClick(): string {
    this.buttonRate = 'banner__button_rate_click';
    console.log('Button Rate is clicked!');
    setTimeout(() => {
      this.buttonRate = 'banner__button_rate';
    }, this.buttonTimeout);
    return this.buttonRate;
  }

  buttonWatch = 'banner__button_watch';

  public buttonWatchClick(): string {
    this.buttonWatch = 'banner__button_watch_click';
    console.log('Button Watch is clicked!');
    setTimeout(() => {
      this.buttonWatch = 'banner__button_watch';
    }, this.buttonTimeout);
    return this.buttonWatch;
  }
}
