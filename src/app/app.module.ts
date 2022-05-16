import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DescriptionComponent } from './description/description.component';
import { CharastersComponent } from './charasters/charasters.component';
import { UserListComponent } from './userList/userList.component';
import { ModalComponent } from './userList/modal/modal.component'
import { ApiComponent } from './userList/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DescriptionComponent,
    CharastersComponent,
    UserListComponent,
    ModalComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
