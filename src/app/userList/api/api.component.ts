import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-app',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  public listFilms: any[] = [];


  public ngOnInit(): void {
    this.getApi();
  }

  public getApi(): void {
    fetch('https://swapi.py4e.com/api/films/')
      .then(result => result.json())
      .then(rowData => this.getList(rowData.results));
  }

  public getList(results: any) {
    this.listFilms = results.map(
      (item: {
        episode_id: number,
        title: string,
        release_date: string,
      }) => ({
        checked: false,
        episode_id: item.episode_id,
        title: item.title,
        release_date: item.release_date,
        viewed: false,
        rate: 0,
      }));
  }

  public publicList() {
    let test : string = '';
    this.listFilms.forEach(elem => (
      test += '<li>' + this.getCheckbox(elem.checked) + elem.episode_id + ': ' + elem.title + '</span> ' + '<span>' + elem.release_date
        + '</span>' + '<button [class]="' + this.getButtonView(elem.viewed) + elem.rate + '</li>'));
    console.log('test', test);
    return test;
  }

  public getCheckbox(checked: boolean): string {
    if (checked = false) {
      return '<input type="checkbox" checked><span>Star Wars. Episode ';
    } else {
      return '<input type="checkbox"><span>Star Wars. Episode ';
    }
  }

  public getButtonView(viewed: boolean): string {
    if (viewed = true) {
      return '"button_viw_off" (click)="buttonViewToggle"></button>';
    } else {
      return '"button_viw_on" (click)="buttonViewToggle"></button>';
    }
  }
}
