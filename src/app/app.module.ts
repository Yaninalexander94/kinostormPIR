import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DescriptionComponent } from './description/description.component';
import { CharastersComponent } from './charasters/charasters.component';
import { UserListComponent } from './userList/userList.component';
import { ModalComponent } from './userList/modal/modal.component';
import { ApiComponent } from './userList/api/api.component';
import { AboutFilmComponent } from './aboutFilm/aboutFilm.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: 'film-list', component: UserListComponent},
  {path: 'about-film', component: AboutFilmComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DescriptionComponent,
    CharastersComponent,
    UserListComponent,
    ModalComponent,
    ApiComponent,
    AboutFilmComponent,
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
