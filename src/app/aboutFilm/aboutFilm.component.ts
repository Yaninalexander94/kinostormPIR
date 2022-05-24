import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aboutFilm',
  templateUrl: './aboutFilm.component.html',
  styleUrls: ['./aboutFilm.component.css'],
})
export class AboutFilmComponent {
  title: string = '';
  viewed: string = '';
  date: string = '';
  rating: number = 0;
  banner: number = 0;


  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {

    this.routeSubscription = route.params.subscribe(params => this.title = params['title']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.title = queryParam['title'];
        this.viewed = queryParam['viewed'];
        this.date = queryParam['date'];
        this.rating = queryParam['rating'];
        this.banner = queryParam['banner'];
      },
    );
  }


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

  public buttonViewStyle(viewed: boolean): string {
    console.log('viewed',viewed);
    if (viewed) {
      return 'banner__button_view_on';
    } else {
      return 'banner__button_view_on';
    }

  }

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
