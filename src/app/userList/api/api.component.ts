import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'api-app',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
// @Injectable()
export class ApiComponent implements OnInit {
  public listFilms: any[] = [];
  public filterviewed: boolean = true;
  public filternotviewed: boolean = true;


  onChangedFilterReset(increased: any) {
    if (increased == true) {
      this.filterviewed = true;
      this.filternotviewed = true;
    }
  }

  onChangedFilterViewed(increased: any) {
    if (increased == true) {
      this.filterviewed = true;
      this.filternotviewed = false;
    }
  }

  onChangedFilterNotViewed(increased: any) {
    if (increased == true) {
      this.filterviewed = false;
      this.filternotviewed = true;
    }
  }


  public ngOnInit(): void {

    this.getApi();

  }

  public getApi(): void {
    fetch('https://swapi.py4e.com/api/films/')
      .then(result => result.json())
      .then(rowData => this.getList(rowData.results));
  }

  public getList(results: any) {
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
    if (viewed === true) {
      return 'button_view_off';
    } else {
      return 'button_view_on';
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

  public buttonRateClick(id: number): void {
    let length = this.listFilms.length;
    for (let i = 0; i < length; i++) {
      if (this.listFilms[i].id === id) {
        if (this.listFilms[i].rating < 5) {
          this.listFilms[i].rating++;
        } else {
          this.listFilms[i].rating = 0;
        }
        break;
      }
    }
  }


  public filterList(viewed: boolean): boolean {
    return ((viewed == false) || (this.filternotviewed == true)) && ((viewed == true) || (this.filterviewed == true));
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

  public deleteItem() {
    let length = this.listFilms.length;

    // while (!isAllDeleted) {
    //   let i = 0;
    //   if (this.listFilms[i].checked) {
    //     this.listFilms.splice(i, 1);
    //   }
    //   i++;
    // }
    for (let i = 0; i < length; i++) {
      if (this.listFilms[i].checked) {
        this.listFilms.splice(i, 1);
        length = this.listFilms.length;
        i--;
      }
    }
    console.log('Список фильмов после удаления - ', this.listFilms);
  }
}
