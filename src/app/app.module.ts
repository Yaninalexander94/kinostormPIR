import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { CharastersComponent } from './charasters/charasters.component';
import { UserListComponent } from './userList/userList.component';
import { FilterComponent } from './userList/filter/filter.component';
import { ApiComponent } from './userList/api/api.component';
import { AboutFilmComponent } from './aboutFilm/aboutFilm.component';
import { RatingComponent } from './userList/rating/rating.component';

/** Определение маршрутов **/
const appRoutes: Routes = [
  {path: 'film-list', component: UserListComponent},
  {path: 'about-film', component: AboutFilmComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    CharastersComponent,
    UserListComponent,
    FilterComponent,
    ApiComponent,
    AboutFilmComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
