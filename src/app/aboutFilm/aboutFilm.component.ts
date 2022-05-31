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
  viewed: string = 'button-view-off';
  date: string = '';
  rating: number = 0;
  banner: number = 0;
  buttonTimeout: number = 150;
  buttonFavoritesClass: string = 'button-favorites-off';
  buttonViewClass: string = 'button-view-off';
  buttonRateClass: string = 'button-rate';
  buttonWatchClass: string = 'button-watch';
  toggleFavorites: boolean = false;
  toggleView: boolean = false;

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

  public buttonFavoritesToggle(): string {
    this.toggleFavorites = !this.toggleFavorites;
    if (this.toggleFavorites) {
      console.log('Button Favorites ON!');
      return this.buttonFavoritesClass = 'button-favorites-on';
    } else {
      console.log('Button Favorites OFF!');
      return this.buttonFavoritesClass = 'button-favorites-off';
    }
  }

  public buttonViewToggle(): string {
    this.toggleView = !this.toggleView;
    if (this.toggleView) {
      console.log('Button View ON!');
      return this.buttonViewClass = 'button-view-on';
    } else {
      console.log('Button View OFF!');
      return this.buttonViewClass = 'button-view-off';
    }
  }

  public buttonRateClick(): string {
    this.buttonRateClass = 'button-rate-click';
    console.log('Button Rate is clicked!');
    setTimeout(() => {
      this.buttonRateClass = 'button-rate';
    }, this.buttonTimeout);
    return this.buttonRateClass;
  }

  public buttonWatchClick(): string {
    this.buttonWatchClass = 'button-watch-click';
    console.log('Button Watch is clicked!');
    setTimeout(() => {
      this.buttonWatchClass = 'button-watch';
    }, this.buttonTimeout);
    return this.buttonWatchClass;
  }
}
