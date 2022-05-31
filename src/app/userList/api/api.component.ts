import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-app',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})

export class ApiComponent implements OnInit {
  public listFilms: any[] = [];
  public filterviewed: boolean = true;
  public filternotviewed: boolean = true;
  public modalOpen: boolean = false;
  public ratingOpen: boolean = false;
  public filmId: number = 0;
  public buttonId: number = 0;

  onChangedFilterReset(increased: any) {
    if (increased == true) {
      this.filterviewed = true;
      this.filternotviewed = true;
      this.modalOpenToggle();
    }
  }

  onChangedFilterViewed(increased: any) {
    if (increased == true) {
      this.filterviewed = true;
      this.filternotviewed = false;
      this.modalOpenToggle();
    }
  }

  onChangedFilterNotViewed(increased: any) {
    if (increased == true) {
      this.filterviewed = false;
      this.filternotviewed = true;
      this.modalOpenToggle();
    }
  }

  onChangedRating(increased: any) {
    this.ratingOpen = !this.ratingOpen;
    this.listFilms[this.filmId].rating = increased;
  }

  public ngOnInit(): void {
    this.getApi();
  }

  public getApi(): void {
    fetch('https://swapi.py4e.com/api/films/')
      .then(result => result.json())
      .then(rowData => this.getList(rowData.results));
  }

  public getList(results: any): void {
    let index = 0;
    this.listFilms = results.map(
      (item: {
        episode_id: number,
        title: string,
        release_date: string,
      }) => ({
        id: index++,
        checked: false,
        episode_id: item.episode_id,
        title: item.title,
        release_date: item.release_date,
        viewed: false,
        rating: 0,
      }));
  }

  public getButtonView(viewed: boolean): string {
    if (viewed) {
      return 'button-view-off';
    } else {
      return 'button-view-on';
    }
  }

  public buttonViewToggle(id: number): void {
    let length = this.listFilms.length;
    for (let i = 0; i < length; i++) {
      if (this.listFilms[i].id === id) {
        this.listFilms[i].viewed = !this.listFilms[i].viewed;
        break;
      }
    }
  }

  public checkboxToggle(id: number): void {
    let length = this.listFilms.length;
    for (let i = 0; i < length; i++) {
      if (this.listFilms[i].id === id) {
        this.listFilms[i].checked = !this.listFilms[i].checked;
        break;
      }
    }
  }

  public filterList(viewed: boolean): boolean {
    return (!viewed || this.filternotviewed) && (viewed || this.filterviewed);
  }

  public deleteButton(): boolean {
    let isDeleteButtonOn = false;
    let length = this.listFilms.length;
    for (let i = 0; i < length; i++) {
      if (this.listFilms[i].checked) {
        isDeleteButtonOn = true;
        break;
      }
    }
    return isDeleteButtonOn;
  }

  public deleteItem(): void {
    let length = this.listFilms.length;
    for (let i = 0; i < length; i++) {
      if (this.listFilms[i].checked) {
        this.listFilms.splice(i, 1);
        length = this.listFilms.length;
        i--;
      }
    }
  }

  public modalOpenToggle(): void {
    this.modalOpen = !this.modalOpen;
  }

  public ratingSet(id: number): void {
    this.ratingOpen = !this.ratingOpen;
    this.filmId = id;
    this.buttonId = id;
  }
}
