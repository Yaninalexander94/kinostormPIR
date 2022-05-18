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
    this.listFilms[id].viewed = !this.listFilms[id].viewed;
    console.log('Изменившийся элемент', this.listFilms[id]);
  }

  public checkboxToggle(id: number): void {
    this.listFilms[id].checked=!this.listFilms[id].checked;
    console.log('Изменившийся элемент', this.listFilms[id]);
  }

  public buttonRateClick(id: number): void
  {
    if(this.listFilms[id].rating<5)
      this.listFilms[id].rating++;
    else this.listFilms[id].rating = 0;
    console.log('Изменившийся элемент', this.listFilms[id]);
  }
}
